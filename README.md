# GoghAI - AI-Powered Robotic Sketch Artist

An interactive web application that uses OpenAI to generate sketches from text prompts or images, then animates them being drawn by a simulated robotic arm.

## Features

- Generate sketches from text descriptions using OpenAI's DALL-E
- Create sketch variations from uploaded images
- Animated vector drawing simulation
- Robotic arm drawing visualization

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your OpenAI API key:
   The API key is already configured in the server.js file.

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000/goghai.html
   ```

## Usage

1. **Text to Sketch**:
   - Enter a description in the text input
   - Click "AI SKETCH" to generate and animate

2. **Image to Sketch**:
   - Upload an image using the file input
   - Click "AI SKETCH FROM IMAGE" to create a sketch variation

## Technical Details

- Frontend: HTML5, Canvas, SVG animations
- Backend: Node.js, Express
- AI: OpenAI DALL-E API
- Vector Tracing: ImageTracer.js

## Notes

- Generated sketches are automatically converted to black and white
- The drawing animation uses SVG path animation
- Images are processed both client-side and server-side for optimal results

# goghai - Robotic Arm Art Creation Showcase

A modern, interactive demo website showcasing a robotic arm creating art with precision and creativity.

## Features

### Professional Demo Interface
- **Clean, modern design** with dark theme
- **Animated DEMO indicator** with subtle glow effect
- **Video duration display** showing current time and total duration
- **Quality indicators** (1080p HD display)
- **Responsive design** that works on all screen sizes

### Video Controls
- **Auto-playing video** that starts immediately and cannot be paused
- **Custom control overlay** with mute and fullscreen options
- **Hover effects** that reveal additional information
- **Smooth transitions** and professional animations

### Demo Control Features
- **Restart Demo** - Restart the video from the beginning
- **Slow Motion** - Play at 0.5x speed for detailed viewing
- **Normal Speed** - Return to regular playback speed
- **Visual feedback** with button state changes and notifications

### Interactive 3D Model
- **Real-time 3D rendering** of the robotic arm using Three.js
- **Mouse controls** - rotate, zoom, and pan around the model
- **Professional lighting** with shadows and realistic materials
- **Animation support** - play/pause model animations if available
- **Reset view** - return to default camera position

### Technical Information Display
- **Project overview** with detailed description
- **Key features list** highlighting AI and robotics capabilities
- **Technical specifications** including precision, workspace, and speed
- **Technology stack tags** showing the tools and frameworks used

### Interactive Elements
- **Notification system** for user feedback
- **Subtle sparkle effects** during video playback
- **Keyboard shortcuts** for easy control
- **Easter egg** - click the logo 7 times for a surprise!

### Auto-Play Features
- **Continuous playback** - video never stops playing
- **Anti-pause protection** - automatically resumes if paused
- **Browser compatibility** - works even with autoplay restrictions
- **Background playback** - continues playing when tab is hidden

## Controls

### Mouse Controls
- **Video area**: Hover to see overlay controls
- **3D Model**: Left click + drag to rotate, right click + drag to pan, scroll to zoom
- **Demo buttons**: Click to restart, change speed, etc.
- **Model buttons**: Click to reset view or toggle animations
- **Logo**: Click 7 times for easter egg

### Keyboard Shortcuts
- **M**: Mute/Unmute
- **F**: Fullscreen
- **R**: Restart demo
- **S**: Slow motion
- **N**: Normal speed

*Note: Video plays automatically and cannot be paused*

## How to Use

1. **Open `index.html`** in your web browser
2. **The demo video starts playing automatically** (demo1.mp4) and cannot be paused
3. **Interact with the 3D model** - rotate, zoom, and explore the robotic arm design
4. **Use the demo controls** to restart, slow down, or adjust playback
5. **Try keyboard shortcuts** for quick control (no pause available)
6. **Explore the technical information** in the side panel

## Files

- `index.html` - Main demo webpage structure
- `styles.css` - Professional styling and animations
- `script.js` - Interactive functionality and demo controls
- `demo1.mp4` - Your robotic arm art creation video
- `robot_arm_final.glb` - 3D model of the robotic arm

## Customization

### Changing Demo Content
Edit the HTML in `index.html`:
- Demo title in `.demo-info h2`
- Description in `.demo-info p`
- Technical specifications in `.spec-item` elements
- Features list in `.features-list ul`

### Modifying Demo Controls
Edit the JavaScript in `script.js`:
- Playback speeds in `enableSlowMotion()` and `enableNormalSpeed()`
- Notification messages in the respective functions
- Keyboard shortcuts in `addKeyboardShortcuts()`

### Updating Technical Specs
Modify the specifications in `index.html`:
- Precision values
- Workspace dimensions
- Speed ranges
- Tool descriptions

## Browser Compatibility

Works in all modern browsers including:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Technical Features

- **CSS Grid layout** for responsive design
- **Video API integration** for custom controls
- **JavaScript animations** for smooth interactions
- **Notification system** with slide-in effects
- **Performance monitoring** with FPS tracking
- **Keyboard event handling** for shortcuts
- **Responsive video sizing** that adapts to screen size

## Demo Specifications

| Feature | Specification |
|---------|---------------|
| **Precision** | ±0.1mm accuracy |
| **Workspace** | 60cm × 40cm canvas |
| **Speed** | Variable 1-50 cm/s |
| **Tools** | Multiple brush types |
| **Video Quality** | 1080p HD |
| **Playback Speeds** | 0.5x (slow motion), 1x (normal) |

## Use Cases

- **Project demonstrations** for investors or clients
- **Educational presentations** about robotics and AI
- **Portfolio showcases** for engineering projects
- **Conference presentations** and technical talks
- **Social media content** for sharing innovations

---

**Experience the future of robotic art creation with goghai!**

*Click the logo 7 times to unlock the easter egg!* #   w w w w w  
 