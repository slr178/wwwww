// Gogh AI sketch stub (preserve original image, sketch only off-screen)
(() => {
 const promptBtn = document.getElementById('promptBtn');
 const imageBtn  = document.getElementById('imageBtn');
 const upload    = document.getElementById('imgUpload');
 const styleDesc = document.getElementById('styleDesc');
 const canvas    = document.getElementById('sketchCanvas');
 const ctx       = canvas.getContext('2d');
 const svgOv     = document.getElementById('svgOverlay');

 // Controls
 const threshold = document.getElementById('threshold');
 const strokeWidth = document.getElementById('strokeWidth');
 const blur = document.getElementById('blur');
 const thresholdValue = document.getElementById('thresholdValue');
 const strokeWidthValue = document.getElementById('strokeWidthValue');
 const blurValue = document.getElementById('blurValue');

 // hidden canvas for filtering
 const hidden    = document.createElement('canvas');
 hidden.width  = 800;  // Match main canvas size
 hidden.height = 800;  // Match main canvas size
 const hctx     = hidden.getContext('2d');

 // Keep track of current image
 let currentImage = null;

 // default style params (used for uploads)
 let styleParams = {
   threshold: parseInt(threshold.value, 10),
   blur: parseFloat(blur.value),
   scale: 1,
   strokeWidth: parseFloat(strokeWidth.value)
 };

 // Update value displays and reprocess on slider change
 threshold.addEventListener('input', () => {
   thresholdValue.textContent = threshold.value;
   styleParams.threshold = parseInt(threshold.value, 10);
   if (currentImage) processImage(currentImage);
 });

 strokeWidth.addEventListener('input', () => {
   strokeWidthValue.textContent = strokeWidth.value;
   styleParams.strokeWidth = parseFloat(strokeWidth.value);
   if (currentImage) processImage(currentImage);
 });

 blur.addEventListener('input', () => {
   blurValue.textContent = blur.value;
   styleParams.blur = parseFloat(blur.value);
   if (currentImage) processImage(currentImage);
 });

 // enable the upload button once a file is picked
 upload.addEventListener('change', () => {
   if (upload.files.length) imageBtn.disabled = false;
 });

 // AI-prompt button: fetch style params, then sketch+vectorize
 promptBtn.addEventListener('click', async () => {
   const desc = styleDesc.value.trim();
   if (!desc) return alert('Describe your sketch style first');
   promptBtn.disabled = true;
   try {
     // 1) get filter params from server
     const styleRes = await fetch('/api/style-preset', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ description: desc })
     });
     if (!styleRes.ok) throw new Error('Failed to get style parameters');
     const serverParams = await styleRes.json();
     
     // Update sliders to match server params
     threshold.value = serverParams.threshold;
     strokeWidth.value = serverParams.strokeWidth;
     blur.value = serverParams.blur;
     thresholdValue.textContent = threshold.value;
     strokeWidthValue.textContent = strokeWidth.value;
     blurValue.textContent = blur.value;
     
     styleParams = {
       ...serverParams,
       threshold: parseInt(threshold.value, 10),
       strokeWidth: parseFloat(strokeWidth.value),
       blur: parseFloat(blur.value)
     };

     // 2) get AI-generated sketch
     const sketchRes = await fetch('/api/sketch-from-prompt', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ prompt: desc })
     });
     if (!sketchRes.ok) throw new Error('Failed to generate sketch');
     const { url } = await sketchRes.json();

     // 3) load and process the image
     await loadAndProcessImage(url, true);
   } catch (err) {
     alert('Error: ' + err.message);
   } finally {
     promptBtn.disabled = false;
   }
 });

 // IMAGE-upload button: do pure client-side sketch & animation
 imageBtn.addEventListener('click', () => {
   const file = upload.files[0];
   if (!file) return;
   imageBtn.disabled = true;
   try {
     const url = URL.createObjectURL(file);
     loadAndProcessImage(url, false);
   } catch (err) {
     alert('Error: ' + err.message);
   } finally {
     imageBtn.disabled = false;
   }
 });

 // Process the current image with current parameters
 function processImage(img) {
   // Calculate scaling to fit the larger canvas while maintaining aspect ratio
   const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
   const w = img.width * scale;
   const h = img.height * scale;
   const x = (canvas.width - w) / 2;
   const y = (canvas.height - h) / 2;

   // Draw original (so user still sees color)
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.drawImage(img, x, y, w, h);

   // Draw + filter on hidden canvas
   hctx.clearRect(0, 0, hidden.width, hidden.height);
   // apply blur
   hctx.filter = `blur(${styleParams.blur}px)`;
   hctx.drawImage(img, x, y, w, h);

   // threshold → pure B&W
   const data = hctx.getImageData(0, 0, hidden.width, hidden.height);
   for (let i = 0; i < data.data.length; i += 4) {
     const lum = 0.3*data.data[i] + 0.59*data.data[i+1] + 0.11*data.data[i+2];
     const v   = lum > styleParams.threshold ? 255 : 0;
     data.data[i] = data.data[i+1] = data.data[i+2] = v;
   }
   hctx.putImageData(data, 0, 0);

   // vectorize & animate
   const imgData = ImageTracer.getImgdata(hidden);
   const svgStr = ImageTracer.imagedataToSVG(imgData, {
     scale: styleParams.scale,
     numberofcolors: 2,
     strokewidth: styleParams.strokeWidth
   });
   animateSVG(svgStr);

   // Store both the raw bitmap and the vector
   sessionStorage.setItem('sketchBitmap', hidden.toDataURL());
   sessionStorage.setItem('sketchSVG', svgStr);

   // Create View in 3D button if it doesn't exist yet
   if (!document.querySelector('.view3d-btn')) {
     const viewIn3DBtn = document.createElement('button');
     viewIn3DBtn.textContent = 'View in 3D Simulator';
     viewIn3DBtn.className = 'primary-btn view3d-btn';
     viewIn3DBtn.style.marginLeft = '10px';
     viewIn3DBtn.onclick = () => window.location.href = 'hardware.html';
     document.querySelector('.controls').appendChild(viewIn3DBtn);
   }
 }

 // Helper to load and process an image (either from AI or upload)
 async function loadAndProcessImage(url, useProxy = false) {
   return new Promise((resolve, reject) => {
     const img = new Image();
     img.crossOrigin = 'anonymous';
     img.onload = () => {
       currentImage = img;  // Store for reprocessing
       processImage(img);
       resolve();
     };
     img.onerror = reject;

     // Use proxy for AI-generated images, direct URL for uploads
     img.src = useProxy ? 
       `/api/sketch_proxy?url=${encodeURIComponent(url)}` : 
       url;
   });
 }

 // helper to animate the SVG stroke
 function animateSVG(svgString) {
   svgOv.innerHTML = svgString;
   const path = svgOv.querySelector('path');
   if (!path) return;
   const L = path.getTotalLength();
   path.style.strokeDasharray  = L;
   path.style.strokeDashoffset = L;
   path.getBoundingClientRect(); // force reflow
   path.style.transition = 'stroke-dashoffset 4s linear';
   path.style.strokeDashoffset = '0';
 }
})();