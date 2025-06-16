// Language System
let currentLanguage = 'en';
const translations = {
    en: {
        welcome: "Welcome! Please select your language.",
        header_subtitle: "Robotic Art Creation",
        nav_demo: "Demo",
        nav_team: "Meet the Team",
        demo_title: "Robotic Arm Art Creation Demo",
        demo_description: "Real-time demonstration of a vision-guided robotic painting platform featuring closed-loop force, position, and visual feedback",
        btn_mute: "MUTE",
        btn_full: "FULL",
        stat_quality: "Quality",
        stat_version: "Version",
        stat_continuous: "Continuous",
        stat_playback: "Playback",
        model_title: "Interactive 3D Model",
        model_description: "Explore the robotic arm design in 3D - rotate, zoom, and examine every detail",
        btn_reset: "RESET",
        btn_animate: "ANIMATE",
        stat_model: "Model",
        stat_interactive: "Interactive",
        stat_controls: "Controls",
        stat_format: "Format",
        project_title: "goghai Project",
        project_subtitle: "Advanced AI-powered robotic art creation system",
        about_demo: "About This Demo",
        demo_long_description: "This demonstration showcases our cutting-edge robotic arm system that combines artificial intelligence, computer vision, and precise mechanical control to create unique artwork. The robot analyzes artistic patterns, selects appropriate colors, and executes brush strokes with remarkable precision.",
        key_features: "Key Features",
        feature_ai: "AI-powered artistic decision making",
        feature_precision: "Precision mechanical control",
        feature_vision: "Computer vision for real-time analysis",
        feature_color: "Dynamic color selection algorithms",
        feature_brush: "Adaptive brush stroke techniques",
        tech_stack: "Technology Stack",
        team_title: "Meet the Development Team",
        team_subtitle: "The brilliant minds behind the goghai project",
        koki_title: "Lead Robotics Engineer & AI Specialist",
        koki_bio: "Koki is the visionary behind the goghai project, combining expertise in robotics, artificial intelligence, and computer vision. With a passion for merging technology and creativity, Koki has developed the core algorithms that enable our robotic arm to create stunning artwork with human-like precision and artistic flair.",
        expertise_title: "Areas of Expertise",
        expertise_robotics: "Robotics Engineering",
        expertise_ml: "Machine Learning",
        expertise_vision: "Computer Vision",
        expertise_control: "Control Systems",
        expertise_ai: "AI Algorithms",
        achievements_title: "Key Achievements",
        achievement_ai: "Developed proprietary AI art generation algorithms",
        achievement_control: "Designed precision control systems for artistic movements",
        achievement_vision: "Integrated computer vision for real-time canvas analysis",
        achievement_brush: "Created adaptive brush stroke techniques",
        portrait_title: "Robot Drawing Koki's Portrait",
        portrait_description: "Watch our robotic arm create a detailed portrait of our lead developer",
        stat_portrait: "Portrait",
        stat_mode: "Mode",
        stat_live: "Live",
        stat_drawing: "Drawing",
        contact_title: "Get in Touch",
        contact_subtitle: "Interested in collaborating or learning more about our robotic art technology?",
        form_name: "Name",
        form_email: "Email",
        form_subject: "Subject",
        form_message: "Message",
        form_message_placeholder: "Tell us about your interest in our robotic art technology...",
        form_submit: "Send Message",
        specs_title: "Technical Specifications",
        spec_precision: "Precision",
        spec_precision_value: "±0.1mm accuracy",
        spec_workspace: "Workspace",
        spec_workspace_value: "60cm × 40cm canvas",
        spec_speed: "Speed",
        spec_speed_value: "Variable 1-50 cm/s",
        spec_tools: "Tools",
        spec_tools_value: "Multiple brush types",
        demo_controls_title: "Demo Controls",
        btn_restart: "Restart Demo",
        btn_slow: "Slow Motion",
        btn_normal: "Normal Speed",
        nav_live: "Live Requests",
        live_title: "Live Requests",
        live_coming_soon: "Coming Soon",
        live_request_title: "Submit Your Drawing Request",
        live_request_desc: "Describe what you'd like the robot to draw. Your request will be processed in real-time during the next live session.",
        live_request_placeholder: "Describe your drawing request... (e.g., 'A minimalist landscape with mountains and a setting sun')",
        live_submit: "Submit Request",
        view_3d: "View in 3D Simulator",
        stroke_width: "Stroke Width",
        threshold: "Threshold",
        blur: "Blur",
        ai_sketch: "AI SKETCH",
        sketch_from_image: "SKETCH FROM IMAGE",
        yoshiki_title: "Robotics Software Engineer & Researcher",
        yoshiki_bio: "Yoshiki completed his B.Eng. at Kyoto University and then joined JSK Robotics Lab for doctoral research on open-source perception stacks for industrial arms. Growing up in Yokohama surrounded by classical painters, he now blends deep-learning aesthetics with ROS software engineering to give the robot its own creative flair.",
        yoshiki_expertise_software: "Robotics Software",
        yoshiki_expertise_ros: "ROS",
        yoshiki_expertise_vision: "Computer Vision",
        yoshiki_expertise_ml: "Machine Learning",
        yoshiki_expertise_opensource: "Open Source",
        yoshiki_achievements_title: "Highlights",
        yoshiki_achievement_1: "Contributor to JSK ROS packages and open-source robotics tools",
        yoshiki_achievement_2: "Authored research papers on robotic perception and manipulation",
        yoshiki_achievement_3: "Active maintainer of diverse robotics software repositories",
        // Hardware page translations
        nav_hardware: "Hardware Test",
        hardware_import_title: "Import 3D Model",
        hardware_load_model: "Load Model",
        hardware_arm_overview: "Robotic Arm Overview",
        hardware_base_waist: "Base & Waist",
        hardware_base_waist_desc: "Rotates the entire arm to sweep the workspace.",
        hardware_shoulder: "Shoulder Joint",
        hardware_shoulder_desc: "Lifts the upper arm; main load-bearing axis.",
        hardware_elbow: "Elbow Joint",
        hardware_elbow_desc: "Extends reach for interior stroke points.",
        hardware_wrist: "Wrist Pitch/Yaw",
        hardware_wrist_desc: "Keeps the pen normal to the canvas.",
        hardware_end_effector: "End-Effector",
        hardware_end_effector_desc: "Holds pens/brushes with force sensing.",
        // Gogh page translations
        gogh_title: "Gogh – Robotic Sketch",
        gogh_description: "Create sketches using text prompts or upload your own images. Watch as the robot arm brings your ideas to life, stroke by stroke.",
        gogh_prompt_placeholder: "e.g. fine pencil lines",
        // GitHub section translations
        github_title: "Open Source Development",
        github_description: "Explore our distributed vision device system for robotic operations. View source code, contribute, and learn more about the technical implementation.",
        github_view_btn: "View on GitHub",
        // Token project translations
        token_title: "GoghAI Token",
        token_description: "The main token for our GoghAI brand. CA:",
        token_twitter: "Follow our founder",
        token_feature_art_title: "Building Better Robots",
        token_feature_art_desc: "Token fees directly fund new prototypes and enhanced robotic arm capabilities. Your trades help build better art.",
        token_feature_ai_title: "Technical Development",
        token_feature_ai_desc: "Every transaction improves our tech. From precision motors to advanced sensors, we're constantly upgrading.",
        token_feature_future_title: "Beyond Digital",
        token_feature_future_desc: "Physical galleries. Real exhibitions. Tangible art you can touch.",
        token_fees_title: "Token Fees At Work",
        token_fees_desc: "Transaction fees are reinvested into improving our robotic systems and expanding our technological capabilities.",
        token_comparison_text: "Take $FWOG for example. Now imagine an AI generating its own character and building art all around that character. That's what we're doing with GoghAI.",
        token_future_release: "In the future, we're releasing a dedicated art token for our robotic art ecosystem.",
        token_learn_more: "Learn More",
        token_join_community: "Join Us",
        // Token page specific translations
        nav_token: "Token",
        token_page_title: "GoghAI",
        token_page_subtitle: "Art. Robots. Blockchain.",
        token_hero_desc: "The main token for our GoghAI brand. Building the future of AI-generated art and robotic creativity.",
        roadmap_title: "What's Next",
        roadmap_phase1_title: "Launch & Grow",
        roadmap_phase1_desc: "Token goes live. Community forms. Art begins.",
        roadmap_phase2_title: "Build & Create",
        roadmap_phase2_desc: "Platform expands. More robots. Better art.",
        roadmap_phase3_title: "Exhibit & Showcase",
        roadmap_phase3_desc: "Real galleries. Physical shows. Art you can see.",
        roadmap_phase4_title: "Scale & Expand",
        roadmap_phase4_desc: "Global network. Everywhere art. Robots creating worldwide.",
        roadmap_current: "Now",
        roadmap_upcoming: "Q2 2025",
        roadmap_future: "Q4 2025",
        roadmap_future2: "2026",

    },
    ja: {
        welcome: "ようこそ！言語を選択してください。",
        header_subtitle: "ロボットアート制作",
        nav_demo: "デモ",
        nav_team: "チームを紹介",
        demo_title: "ロボットアーム アート制作デモ",
        demo_description: "AIを活用したロボットアームが精密性と創造性を持って見事なアートワークを制作する様子をご覧ください",
        btn_mute: "ミュート",
        btn_full: "フル画面",
        stat_quality: "品質",
        stat_version: "バージョン",
        stat_continuous: "連続",
        stat_playback: "再生",
        model_title: "インタラクティブ3Dモデル",
        model_description: "ロボットアームのデザインを3Dで探索 - 回転、ズーム、細部まで確認",
        btn_reset: "リセット",
        btn_animate: "アニメート",
        stat_model: "モデル",
        stat_interactive: "インタラクティブ",
        stat_controls: "コントロール",
        stat_format: "フォーマット",
        project_title: "goghaiプロジェクト",
        project_subtitle: "高度なAI搭載ロボットアート制作システム",
        about_demo: "このデモについて",
        demo_long_description: "The platform couples a 6-DoF industrial manipulator, high-resolution depth sensing, and a ROS-based motion-planning stack. Visual perception reconstructs canvas geometry; a hybrid force/position controller then executes optimised paint trajectories in real-time.",
        key_features: "主要機能",
        feature_ai: "AI主導の芸術的意思決定",
        feature_precision: "精密機械制御",
        feature_vision: "リアルタイム分析のためのコンピュータビジョン",
        feature_color: "動的色選択アルゴリズム",
        feature_brush: "適応的ブラシストローク技術",
        tech_stack: "技術スタック",
        team_title: "開発チームのご紹介",
        team_subtitle: "goghaiプロジェクトの優秀な頭脳たち",
        koki_title: "主任ロボティクスエンジニア・AI専門家",
        koki_bio: "Kokiはgoghaiプロジェクトの先見者であり、ロボティクス、人工知能、コンピュータビジョンの専門知識を組み合わせています。テクノロジーと創造性を融合させることに情熱を持ち、ロボットアームが人間のような精度と芸術的センスで見事なアートワークを制作できる中核アルゴリズムを開発しました。",
        expertise_title: "専門分野",
        expertise_robotics: "ロボティクス工学",
        expertise_ml: "機械学習",
        expertise_vision: "コンピュータビジョン",
        expertise_control: "制御システム",
        expertise_ai: "AIアルゴリズム",
        achievements_title: "主要な成果",
        achievement_ai: "独自のAIアート生成アルゴリズムの開発",
        achievement_control: "芸術的動作のための精密制御システムの設計",
        achievement_vision: "リアルタイムキャンバス分析のためのコンピュータビジョン統合",
        achievement_brush: "適応的ブラシストローク技術の創造",
        portrait_title: "ロボットがKokiの肖像画を描画",
        portrait_description: "ロボットアームが主任開発者の詳細な肖像画を制作する様子をご覧ください",
        stat_portrait: "肖像画",
        stat_mode: "モード",
        stat_live: "ライブ",
        stat_drawing: "描画",
        contact_title: "お問い合わせ",
        contact_subtitle: "コラボレーションやロボットアート技術について詳しく知りたいですか？",
        form_name: "お名前",
        form_email: "メールアドレス",
        form_subject: "件名",
        form_message: "メッセージ",
        form_message_placeholder: "ロボットアート技術への関心についてお聞かせください...",
        form_submit: "メッセージを送信",
        specs_title: "技術仕様",
        spec_precision: "精度",
        spec_precision_value: "±0.1mm精度",
        spec_workspace: "作業空間",
        spec_workspace_value: "60cm × 40cmキャンバス",
        spec_speed: "速度",
        spec_speed_value: "可変 1-50 cm/s",
        spec_tools: "ツール",
        spec_tools_value: "複数のブラシタイプ",
        demo_controls_title: "デモコントロール",
        btn_restart: "デモを再開",
        btn_slow: "スローモーション",
        btn_normal: "通常速度",
        nav_live: "ライブリクエスト",
        live_title: "ライブリクエスト",
        live_coming_soon: "近日公開",
        live_request_title: "描画リクエストを送信",
        live_request_desc: "ロボットに描いてほしい絵を説明してください。リクエストは次回のライブセッション中にリアルタイムで処理されます。",
        live_request_placeholder: "描画リクエストを説明してください...(例: '山と夕日のあるミニマルな風景')",
        live_submit: "リクエストを送信",
        view_3d: "3Dシミュレーターで見る",
        stroke_width: "線の太さ",
        threshold: "閾値",
        blur: "ぼかし",
        ai_sketch: "AIスケッチ",
        sketch_from_image: "画像からスケッチ",
        yoshiki_title: "ロボティクスソフトウェアエンジニア・研究者",
        yoshiki_bio: "吉樹は京都大学で工学学士号を取得後、JSKロボティクス研究室に入り、産業用ロボットアームのためのオープンソース知覚システムに関する博士研究を行っています。古典的な画家たちに囲まれた横浜で育ち、現在はディープラーニングの美学とROSソフトウェアエンジニアリングを融合させ、ロボットに独自の創造性を与えています。",
        yoshiki_expertise_software: "ロボティクスソフトウェア",
        yoshiki_expertise_ros: "ROS",
        yoshiki_expertise_vision: "コンピュータビジョン",
        yoshiki_expertise_ml: "機械学習",
        yoshiki_expertise_opensource: "オープンソース",
        yoshiki_achievements_title: "主な実績",
        yoshiki_achievement_1: "JSK ROSパッケージとオープンソースロボティクスツールへの貢献",
        yoshiki_achievement_2: "ロボット知覚と操作に関する研究論文の執筆",
        yoshiki_achievement_3: "多様なロボティクスソフトウェアリポジトリのメンテナ",
        // Hardware page Japanese translations
        nav_hardware: "ハードウェアテスト",
        hardware_import_title: "3Dモデルをインポート",
        hardware_load_model: "モデルを読み込み",
        hardware_arm_overview: "ロボットアーム概要",
        hardware_base_waist: "ベース・ウエスト",
        hardware_base_waist_desc: "アーム全体を回転させてワークスペースをスイープします。",
        hardware_shoulder: "肩関節",
        hardware_shoulder_desc: "上腕を持ち上げる主要な荷重軸。",
        hardware_elbow: "肘関節",
        hardware_elbow_desc: "内部ストロークポイントへのリーチを拡張。",
        hardware_wrist: "手首ピッチ・ヨー",
        hardware_wrist_desc: "ペンをキャンバスに対して垂直に保持。",
        hardware_end_effector: "エンドエフェクタ",
        hardware_end_effector_desc: "力センシング付きでペン・ブラシを保持。",
        // Gogh page Japanese translations
        gogh_title: "Gogh – ロボットスケッチ",
        gogh_description: "テキストプロンプトを使用してスケッチを作成するか、独自の画像をアップロードしてください。ロボットアームがあなたのアイデアを一筆一筆で実現する様子をご覧ください。",
        gogh_prompt_placeholder: "例：細い鉛筆線",
        // GitHub section Japanese translations
        github_title: "オープンソース開発",
        github_description: "ロボット操作のための分散ビジョンデバイスシステムを探索してください。ソースコードを表示し、貢献し、技術実装について詳しく学んでください。",
        github_view_btn: "GitHubで表示",
        // Token project Japanese translations
        token_title: "GoghAI トークン",
        token_description: "GoghAIブランドのメイントークン。CA:",
        token_twitter: "創設者をフォロー",
        token_feature_art_title: "より良いロボットの構築",
        token_feature_art_desc: "トークン手数料が新しいプロトタイプとロボットアームの機能強化に直接資金提供。あなたの取引がより良いアートを作り出します。",
        token_feature_ai_title: "技術開発",
        token_feature_ai_desc: "すべての取引が技術を向上させます。精密モーターから高度なセンサーまで、常にアップグレードを続けています。",
        token_feature_future_title: "デジタルを超えて",
        token_feature_future_desc: "物理的ギャラリー。実際の展示会。触れることができる有形のアート。",
        token_fees_title: "トークン手数料の活用",
        token_fees_desc: "取引手数料はロボットシステムの改善と技術能力の拡張に再投資されます。",
        token_comparison_text: "$FWOGを例に取ってみてください。今度はAIが独自のキャラクターを生成し、そのキャラクターを中心にアートを構築することを想像してください。それがGoghAIで私たちがやっていることです。",
        token_future_release: "将来的に、ロボットアートエコシステム専用のアートトークンをリリース予定です。",
        token_learn_more: "Learn More",
        token_join_community: "Join Us",
        // Token page Japanese translations
        nav_token: "トークン",
        token_page_title: "GoghAI",
        token_page_subtitle: "アート。ロボット。ブロックチェーン。",
        token_hero_desc: "GoghAIブランドのメイントークン。AI生成アートとロボット創造性の未来を構築。",
        roadmap_title: "次のステップ",
        roadmap_phase1_title: "ローンチ・成長",
        roadmap_phase1_desc: "トークン開始。コミュニティ形成。アート開始。",
        roadmap_phase2_title: "構築・創造",
        roadmap_phase2_desc: "プラットフォーム拡張。より多くのロボット。より良いアート。",
        roadmap_phase3_title: "展示・ショーケース",
        roadmap_phase3_desc: "実際のギャラリー。物理的ショー。見ることができるアート。",
        roadmap_phase4_title: "拡大・展開",
        roadmap_phase4_desc: "グローバルネットワーク。どこでもアート。世界中で創造するロボット。",
        roadmap_current: "現在",
        roadmap_upcoming: "2025年Q2",
        roadmap_future: "2025年Q4",
        roadmap_future2: "2026年",

    }
};

// DOM Elements
const video = document.getElementById('mainVideo');
const muteBtn = document.getElementById('muteBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
// videoDuration element removed
const restartBtn = document.getElementById('restartBtn');
const slowMotionBtn = document.getElementById('slowMotionBtn');
const normalSpeedBtn = document.getElementById('normalSpeedBtn');
const resetViewBtn = document.getElementById('resetViewBtn');
const animateBtn = document.getElementById('animateBtn');

// Navigation elements
const homeLink = document.getElementById('homeLink');
const developersLink = document.getElementById('developersLink');
const homeSection = document.getElementById('homeSection');
const developersSection = document.getElementById('developersSection');

// Portrait video elements
const portraitVideo = document.getElementById('portraitVideo');
const portraitMuteBtn = document.getElementById('portraitMuteBtn');
const portraitFullscreenBtn = document.getElementById('portraitFullscreenBtn');

// Contact form
const contactForm = document.getElementById('contactForm');

// Demo variables
let isVideoPlaying = true; // Always playing, never pausable
let currentPlaybackRate = 1;

// 3D Model variables
let scene, camera, renderer, controls, robotModel;
let animationMixer;
let isAnimating = false;

// Language System Functions
function selectLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    // Update all translations
    updateLanguage();
    
    // Hide language modal with animation
    const languageModal = document.getElementById('languageModal');
    languageModal.classList.add('fade-out');
    
    setTimeout(() => {
        languageModal.style.display = 'none';
    }, 300);
    
    showNotification(lang === 'en' ? 'Language changed to English' : '言語が日本語に変更されました');
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Handle special cases like placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
    
    // Update button text for MUTE/UNMUTE state
    updateMuteButtons();
}

function updateMuteButtons() {
    // Update main video mute button
    if (video && muteBtn) {
        muteBtn.textContent = video.muted ? 
            (currentLanguage === 'ja' ? 'ミュート解除' : 'UNMUTE') : 
            translations[currentLanguage].btn_mute;
    }
    
    // Update portrait video mute button
    if (portraitVideo && portraitMuteBtn) {
        portraitMuteBtn.textContent = portraitVideo.muted ? 
            (currentLanguage === 'ja' ? 'ミュート解除' : 'UNMUTE') : 
            translations[currentLanguage].btn_mute;
    }
}

function initializeLanguageSystem() {
    // Check if user has previously selected a language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    
    if (savedLanguage && translations[savedLanguage]) {
        // User has a saved preference, use it and hide modal
        currentLanguage = savedLanguage;
        updateLanguage();
        
        const languageModal = document.getElementById('languageModal');
        languageModal.style.display = 'none';
    } else {
        // First time user, show language selection modal
        const languageModal = document.getElementById('languageModal');
        languageModal.style.display = 'flex';
    }
}

// Initialize the demo
function initializeDemo() {
    // Initialize language system first
    initializeLanguageSystem();
    
    // Add language selector event listeners
    const languageButtons = document.querySelectorAll('.language-selector .language-btn');
    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            selectLanguage(lang);
            
            // Update active state of buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        
        // Set initial active state
        if (button.getAttribute('data-lang') === currentLanguage) {
            button.classList.add('active');
        }
    });
    
    // Set up video event listeners
    video.addEventListener('play', () => {
        isVideoPlaying = true;
    });

    // Prevent pausing - if someone tries to pause, immediately play again
    video.addEventListener('pause', () => {
        video.play();
        isVideoPlaying = true;
    });

    video.addEventListener('loadedmetadata', () => {
        // Ensure video starts playing
        video.play();
    });

    // Video controls (no play/pause)
    muteBtn.addEventListener('click', toggleMute);
    fullscreenBtn.addEventListener('click', toggleFullscreen);

    // Demo controls
    restartBtn.addEventListener('click', restartDemo);
    slowMotionBtn.addEventListener('click', enableSlowMotion);
    normalSpeedBtn.addEventListener('click', enableNormalSpeed);

    // 3D Model controls
    resetViewBtn.addEventListener('click', resetView);
    animateBtn.addEventListener('click', toggleAnimation);

    // Navigation controls
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
    });
    
    developersLink.addEventListener('click', (e) => {
        e.preventDefault();
        showSection('developers');
    });

    // Portrait video controls
    portraitMuteBtn.addEventListener('click', togglePortraitMute);
    portraitFullscreenBtn.addEventListener('click', togglePortraitFullscreen);

    // Contact form
    contactForm.addEventListener('submit', handleContactForm);

    // Initialize 3D model with slight delay to ensure container is ready
    setTimeout(() => {
        console.log('Checking Three.js availability...');
        console.log('THREE available:', typeof THREE !== 'undefined');
        console.log('GLTFLoader available:', typeof THREE !== 'undefined' && !!THREE.GLTFLoader);
        console.log('OrbitControls available:', typeof THREE !== 'undefined' && !!THREE.OrbitControls);
        
        // Also check if they're available globally
        console.log('Global GLTFLoader available:', typeof GLTFLoader !== 'undefined');
        console.log('Global OrbitControls available:', typeof OrbitControls !== 'undefined');
        
        try {
            // Check for Three.js libraries - they might be on THREE object or global
            const hasGLTFLoader = (typeof THREE !== 'undefined' && THREE.GLTFLoader) || (typeof GLTFLoader !== 'undefined');
            const hasOrbitControls = (typeof THREE !== 'undefined' && THREE.OrbitControls) || (typeof OrbitControls !== 'undefined');
            
            if (typeof THREE !== 'undefined' && hasGLTFLoader && hasOrbitControls) {
                console.log('All Three.js libraries loaded successfully!');
                init3DModel();
            } else {
                console.error('Three.js libraries not loaded properly');
                console.log('Adding fallback message to 3D container...');
                
                // Add fallback message to the 3D container
                const container = document.getElementById('threejs-container');
                if (container) {
                    container.innerHTML = `
                        <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #4ecdc4; font-size: 18px; text-align: center; padding: 20px;">
                            <div>
                                <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
                                <div>3D Model Unavailable</div>
                                <div style="font-size: 14px; margin-top: 10px; color: #b3b3b3;">Three.js libraries failed to load</div>
                                <div style="font-size: 12px; margin-top: 10px; color: #888;">Try refreshing the page or disable ad blockers</div>
                            </div>
                        </div>
                    `;
                }
                
                showNotification('3D libraries not loaded - check console');
            }
        } catch (error) {
            console.error('Failed to initialize 3D model:', error);
            showNotification('3D model initialization failed');
        }
    }, 1000);

    // Ensure autoplay
    video.play();
}

// Video control functions
function toggleMute() {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 
        (currentLanguage === 'ja' ? 'ミュート解除' : 'UNMUTE') : 
        translations[currentLanguage].btn_mute;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Demo control functions
function restartDemo() {
    video.currentTime = 0;
    video.play();
    
    // Add visual feedback
    restartBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        restartBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Ensure it keeps playing after restart
    setTimeout(() => {
        if (video.paused) {
            video.play();
        }
    }, 100);
    
    // Show notification
    showNotification('Demo restarted!');
}

function enableSlowMotion() {
    currentPlaybackRate = 0.5;
    video.playbackRate = currentPlaybackRate;
    
    // Update button states
    slowMotionBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
    normalSpeedBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
    
    showNotification('Slow motion enabled!');
}

function enableNormalSpeed() {
    currentPlaybackRate = 1;
    video.playbackRate = currentPlaybackRate;
    
    // Update button states
    normalSpeedBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
    slowMotionBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
    
    showNotification('Normal speed restored!');
}

// 3D Model functions
function init3DModel() {
    console.log('Initializing 3D model...');
    const container = document.getElementById('threejs-container');
    
    if (!container) {
        console.error('Three.js container not found!');
        return;
    }
    
    console.log('Container found, setting up Three.js scene...');
    
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(5, 5, 5);
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // Controls setup - check both locations
    const OrbitControlsConstructor = THREE.OrbitControls || window.OrbitControls;
    controls = new OrbitControlsConstructor(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 20;
    controls.minDistance = 2;
    
    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(0x4ecdc4, 0.5, 100);
    pointLight.position.set(-5, 5, 5);
    scene.add(pointLight);
    
    // Add a test cube first to verify Three.js is working
    const testGeometry = new THREE.BoxGeometry(1, 1, 1);
    const testMaterial = new THREE.MeshPhongMaterial({ color: 0x4ecdc4 });
    const testCube = new THREE.Mesh(testGeometry, testMaterial);
    testCube.position.set(0, 0, 0);
    testCube.castShadow = true;
    scene.add(testCube);
    
    // Load the GLB model - check both locations
    const GLTFLoaderConstructor = THREE.GLTFLoader || window.GLTFLoader;
    const loader = new GLTFLoaderConstructor();
    loader.load('./robot_arm_final.glb', function(gltf) {
        console.log('GLB model loaded successfully!', gltf);
        
        // Remove test cube
        scene.remove(testCube);
        
        robotModel = gltf.scene;
        
        // Scale and position the model
        robotModel.scale.set(1, 1, 1);
        robotModel.position.set(0, -1, 0);
        
        // Enable shadows
        robotModel.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                
                // Enhance materials
                if (child.material) {
                    child.material.metalness = 0.7;
                    child.material.roughness = 0.3;
                }
            }
        });
        
        scene.add(robotModel);
        
        // Setup animations if available
        if (gltf.animations && gltf.animations.length > 0) {
            animationMixer = new THREE.AnimationMixer(robotModel);
            const action = animationMixer.clipAction(gltf.animations[0]);
            action.play();
            console.log('Animations loaded:', gltf.animations.length);
        }
        
        showNotification('3D model loaded successfully!');
    }, function(progress) {
        console.log('Loading progress:', Math.round((progress.loaded / progress.total * 100)) + '%');
    }, function(error) {
        console.error('Error loading GLB model:', error);
        showNotification('Error loading 3D model - keeping test cube');
        // Keep the test cube if model fails to load
    });
    
    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x2a2a3e });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.5;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Start render loop
    animate3D();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize3D);
    
    console.log('3D scene setup complete!');
}

function animate3D() {
    requestAnimationFrame(animate3D);
    
    // Update controls
    controls.update();
    
    // Update animations
    if (animationMixer) {
        animationMixer.update(0.016); // 60fps
    }
    
    // Render
    renderer.render(scene, camera);
}

function onWindowResize3D() {
    const container = document.getElementById('threejs-container');
    if (container && camera && renderer) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
}

function resetView() {
    if (controls && camera) {
        // Reset camera position
        camera.position.set(5, 5, 5);
        controls.reset();
        showNotification('View reset!');
    }
}

function toggleAnimation() {
    if (animationMixer) {
        isAnimating = !isAnimating;
        if (isAnimating) {
            animationMixer.timeScale = 1;
            animateBtn.textContent = 'PAUSE';
            showNotification('Animation playing!');
        } else {
            animationMixer.timeScale = 0;
            animateBtn.textContent = 'ANIMATE';
            showNotification('Animation paused!');
        }
    } else {
        showNotification('No animations available');
    }
}

// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    homeSection.classList.remove('active');
    developersSection.classList.remove('active');
    
    // Remove active class from all nav links
    homeLink.classList.remove('active');
    developersLink.classList.remove('active');
    
    // Show selected section and update nav
    if (sectionName === 'home') {
        homeSection.classList.add('active');
        homeLink.classList.add('active');
        showNotification('Switched to Demo view');
    } else if (sectionName === 'developers') {
        developersSection.classList.add('active');
        developersLink.classList.add('active');
        showNotification('Meet the Development Team');
    }
}

// Portrait video controls
function togglePortraitMute() {
    portraitVideo.muted = !portraitVideo.muted;
    portraitMuteBtn.textContent = portraitVideo.muted ? 
        (currentLanguage === 'ja' ? 'ミュート解除' : 'UNMUTE') : 
        translations[currentLanguage].btn_mute;
}

function togglePortraitFullscreen() {
    if (!document.fullscreenElement) {
        portraitVideo.requestFullscreen().catch(err => {
            console.log('Error attempting to enable fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// Contact form handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simulate form submission
    showNotification('Message sent successfully! We will get back to you soon.');
    
    // Log form data (in a real app, you'd send this to a server)
    console.log('Contact form submitted:', {
        name,
        email,
        subject,
        message
    });
    
    // Reset form
    contactForm.reset();
    
    // Add some visual feedback
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
    }, 3000);
}

// Utility functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(78, 205, 196, 0.9);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInNotification 0.3s ease-out;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
function addNotificationAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInNotification {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutNotification {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
        
        @keyframes sparkle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add some visual effects for the demo
function addVisualEffects() {
    // Add subtle sparkle effects occasionally
    setInterval(() => {
        if (Math.random() < 0.05 && isVideoPlaying) { // 5% chance when video is playing
            createSparkleEffect();
        }
    }, 3000);
}

function createSparkleEffect() {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.width = '3px';
    sparkle.style.height = '3px';
    sparkle.style.background = '#4ecdc4';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.animation = 'sparkle 1.5s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (document.body.contains(sparkle)) {
            document.body.removeChild(sparkle);
        }
    }, 1500);
}

// Easter egg - click logo multiple times
function addEasterEgg() {
    let clickCount = 0;
    const logo = document.querySelector('.logo h1');
    
    logo.addEventListener('click', () => {
        clickCount++;
                 if (clickCount === 7) {
             showNotification('Easter egg found! Demo mode activated!');
             createMultipleSparkles();
            // Add some fun effects
            setTimeout(() => {
                enableSlowMotion();
                setTimeout(() => {
                    enableNormalSpeed();
                }, 2000);
            }, 1000);
            clickCount = 0;
        }
    });
}

function createMultipleSparkles() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createSparkleEffect();
        }, i * 100);
    }
}

// Keyboard shortcuts
function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Only trigger if not typing in an input
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            switch(e.key.toLowerCase()) {
                case 'm':
                    e.preventDefault();
                    toggleMute();
                    break;
                case 'f':
                    e.preventDefault();
                    toggleFullscreen();
                    break;
                case 'r':
                    e.preventDefault();
                    restartDemo();
                    break;
                case 's':
                    e.preventDefault();
                    enableSlowMotion();
                    break;
                case 'n':
                    e.preventDefault();
                    enableNormalSpeed();
                    break;
            }
        }
    });
}

// Performance monitoring
let lastTime = performance.now();
let frameCount = 0;

function updatePerformance() {
    frameCount++;
    const now = performance.now();
    
    if (now - lastTime >= 1000) {
        const fps = Math.round(frameCount * 1000 / (now - lastTime));
        
        // Log performance occasionally for debugging
        if (Math.random() < 0.01) {
            console.log(`Demo FPS: ${fps}`);
        }
        
        lastTime = now;
        frameCount = 0;
    }
    
    requestAnimationFrame(updatePerformance);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeDemo();
    addNotificationAnimation();
    addVisualEffects();
    addEasterEgg();
    addKeyboardShortcuts();
    
    // Start performance monitoring
    requestAnimationFrame(updatePerformance);
    
    // Ensure video autoplays aggressively
    setTimeout(() => {
        video.play().catch(e => {
            console.log('Autoplay may be blocked by browser, but will try to keep playing');
            // Keep trying to play if blocked
            setInterval(() => {
                if (video.paused) {
                    video.play();
                }
            }, 1000);
        });
    }, 100);
    
    // Welcome message
    setTimeout(() => {
        showNotification('Welcome to goghai!');
    }, 1000);
    
    // Safety net - check every 2 seconds to ensure video is always playing
    setInterval(() => {
        if (video.paused && video.readyState >= 2) {
            video.play();
        }
    }, 2000);

    const goghLink=document.getElementById('goghLink');
    if(goghLink){
        goghLink.addEventListener('click',()=>{
            document.querySelectorAll('.main-nav .nav-link').forEach(a=>a.classList.remove('active'));
            goghLink.classList.add('active');
        });
    }

    // Initialize language system
    const langButtons = document.querySelectorAll('.language-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            selectLanguage(lang);
            localStorage.setItem('language', lang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Set initial language
    const currentLang = localStorage.getItem('language') || 'en';
    selectLanguage(currentLang);
    document.querySelector(`[data-lang="${currentLang}"]`)?.classList.add('active');
});

// Handle visibility change - video continues playing even when tab is hidden
document.addEventListener('visibilitychange', () => {
    // Video continues playing regardless of tab visibility
    if (document.hidden) {
        video.play(); // Ensure it keeps playing
    }
});

// Handle window resize for responsive video
window.addEventListener('resize', () => {
    // Ensure video maintains aspect ratio
    if (video.videoWidth && video.videoHeight) {
        const container = video.parentElement;
        const containerAspect = container.clientWidth / container.clientHeight;
        const videoAspect = video.videoWidth / video.videoHeight;
        
        if (containerAspect > videoAspect) {
            video.style.width = 'auto';
            video.style.height = '100%';
        } else {
            video.style.width = '100%';
            video.style.height = 'auto';
        }
    }
});

// Make selectLanguage globally available for HTML onclick
window.selectLanguage = selectLanguage;

// Console welcome message for developers
console.log(`
goghai
======
Keyboard shortcuts:
- M: Mute/Unmute
- F: Fullscreen
- R: Restart demo
- S: Slow motion
- N: Normal speed

3D Model Controls:
- Mouse: Rotate, zoom, pan
- RESET button: Reset camera view
- ANIMATE button: Toggle animations

Video plays automatically and cannot be paused!
Click the logo 7 times for a surprise!

Language: ${currentLanguage}
`);

console.log('Demo initialized successfully!'); 