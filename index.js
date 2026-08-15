<!DOCTYPE html>
<html lang="my">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Special Wish for EAINT</title>
    <!-- Premium Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;800&family=Padauk:wght@400;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary-pink: #ff85a1;
            --deep-plum: #2d0f14;
            --glass-bg: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.15);
            --accent-gold: #fbc2eb;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            color: #ffffff;
            font-family: 'Montserrat', 'Padauk', sans-serif;
            background-color: #0a0506;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        /* Cinematic Background Slideshow */
        .slideshow {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: -2;
        }

        .slide {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transform: scale(1.1);
            animation: kenBurns 16s infinite ease-in-out;
        }

        .slideshow::after {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(10,5,6,0.8) 100%);
            z-index: -1;
        }

        @keyframes kenBurns {
            0% { opacity: 0; transform: scale(1.1); }
            10% { opacity: 1; }
            40% { opacity: 1; }
            50% { opacity: 0; transform: scale(1); }
            100% { opacity: 0; }
        }

        .slide:nth-child(1) { animation-delay: 0s; background-image: url('photo1.jpg'); }
        .slide:nth-child(2) { animation-delay: 4s; background-image: url('photo2.jpg'); }
        .slide:nth-child(3) { animation-delay: 8s; background-image: url('photo3.jpg'); }
        .slide:nth-child(4) { animation-delay: 12s; background-image: url('photo4.jpg'); }

        canvas {
            position: fixed;
            top: 0; left: 0;
            pointer-events: none;
            z-index: -1;
        }

        /* Glassmorphic Card */
        .main-card {
            background: var(--glass-bg);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid var(--glass-border);
            border-radius: 30px;
            padding: 40px 30px;
            width: 90%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 25px 45px rgba(0,0,0,0.5);
            animation: fadeIn 1.5s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .header-label {
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 12px;
            color: var(--primary-pink);
            margin-bottom: 10px;
            font-weight: 600;
        }

        h1 {
            font-size: 28px;
            font-weight: 800;
            margin-bottom: 5px;
            background: linear-gradient(to right, #fff, var(--accent-gold));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .name-tag {
            font-size: 22px;
            font-weight: 300;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .heart-icon {
            font-size: 50px;
            margin: 20px 0;
            filter: drop-shadow(0 0 15px var(--primary-pink));
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.8; }
        }

        .timer-box {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 15px;
            font-size: 14px;
            border: 1px solid var(--glass-border);
            margin-bottom: 30px;
            font-family: monospace;
            color: var(--accent-gold);
        }

        /* Modern Button */
        #runBtn {
            background: #ffffff;
            color: #000;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.4s;
            width: 100%;
        }

        #runBtn:hover:not(:disabled) {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(255, 133, 161, 0.4);
            background: var(--primary-pink);
            color: #fff;
        }

        #runBtn:disabled {
            background: rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.3);
            cursor: not-allowed;
        }

        /* Modal Design */
        .modal {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100;
            backdrop-filter: blur(10px);
            transition: opacity 0.5s;
        }

        .modal-content {
            width: 85%;
            max-width: 450px;
            text-align: center;
        }

        .message-box {
            font-size: 18px;
            line-height: 1.8;
            color: #fce4ec;
            margin: 20px 0;
            min-height: 120px;
        }

        .close-btn {
            background: transparent;
            color: white;
            border: 1px solid white;
            padding: 10px 25px;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 20px;
            opacity: 0.6;
        }

        .close-btn:hover { opacity: 1; }

        .hidden { display: none; }
    </style>
</head>
<body>

    <div class="slideshow">
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
        <div class="slide"></div>
    </div>

    <canvas id="canvas"></canvas>

    <audio id="bgMusic" loop>
        <source src="birthday_song.mp3" type="audio/mpeg">
    </audio>

    <div class="main-card">
        <div class="header-label">Exclusive Birthday Wish</div>
        <h1>HAPPY BIRTHDAY</h1>
        <div class="name-tag">— EAINT —</div>
        
        <div class="heart-icon">💖</div>

        <div id="timer" class="timer-box">Initializing...</div>
        
        <button id="runBtn" onclick="openSurprise()" disabled>Unlock Surprise</button>
    </div>

    <!-- Surprise Overlay -->
    <div id="modal" class="modal hidden">
        <div class="modal-content">
            <h2 style="font-size: 32px; color: var(--primary-pink);">✨ 💖 ✨</h2>
            <div id="surpriseMsg" class="message-box"></div>
            <button class="close-btn" onclick="closeModal()">Close Experience</button>
        </div>
    </div>

    <script>
        // Set your target date here
        const targetDate = new Date("2024-09-17T00:00:00").getTime(); 

        function updateTimer() {
            const now = new Date().getTime();
            const diff = targetDate - now;

            const timerDiv = document.getElementById('timer');
            const btn = document.getElementById('runBtn');

            if (diff > 0) {
                const d = Math.floor(diff / (1000 * 60 * 60 * 24));
                const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((diff % (1000 * 60)) / 1000);
                timerDiv.innerHTML = `${d}D : ${h}H : ${m}M : ${s}S`;
                btn.disabled = true;
            } else {
                timerDiv.innerHTML = "THE MOMENT HAS ARRIVED ✨";
                timerDiv.style.borderColor = "var(--primary-pink)";
                btn.disabled = false;
            }
        }

        setInterval(updateTimer, 1000);
        updateTimer();

        // Canvas Particles (Subtle Hearts)
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 1 + 0.5;
                this.opacity = Math.random() * 0.5;
            }
            update() {
                this.y -= this.speedY;
                if (this.y < 0) this.y = canvas.height;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 133, 161, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < 100; i++) particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }
        init();
        animate();

        // Surprise Functionality
        function openSurprise() {
            document.getElementById('modal').classList.remove('hidden');
            const music = document.getElementById('bgMusic');
            music.play().catch(e => console.log("Audio waiting for interaction"));

            const text = "EAINT ရေ... မွေးနေ့မှာ အစစအရာရာ အဆင်ပြေပါစေ။ လိုအင်ဆန္ဒတွေ ပြည့်ဝပြီး ပျော်ရွှင်ရတဲ့ Developer ကြီး ဖြစ်ပါစေ။ အချစ်များစွာဖြင့်... ဟက်ပီးမွေးနေ့ပါဗျာ! 💖🎂🎉🌸";
            const msgDiv = document.getElementById('surpriseMsg');
            msgDiv.innerText = "";
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    msgDiv.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            }
            typeWriter();
        }

        function closeModal() {
            document.getElementById('modal').classList.add('hidden');
            document.getElementById('bgMusic').pause();
        }
    </script>
</body>
</html>
