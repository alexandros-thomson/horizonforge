<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HorizonForge - Interactive VR World Creation Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #ffffff;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .demo-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            padding: 40px 0;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
            border-radius: 20px;
            margin-bottom: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .header h1 {
            font-size: 3.5em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .header p {
            font-size: 1.3em;
            opacity: 0.9;
            max-width: 800px;
            margin: 0 auto;
        }

        .interface-demo {
            background: rgba(255,255,255,0.05);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 30px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .demo-section {
            margin-bottom: 40px;
        }

        .demo-section h2 {
            color: #4ecdc4;
            font-size: 2.2em;
            margin-bottom: 20px;
            text-align: center;
            position: relative;
        }

        .demo-section h2::after {
            content: '';
            display: block;
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
            margin: 10px auto;
            border-radius: 2px;
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }

        .feature-card {
            background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 107, 107, 0.1));
            border-radius: 15px;
            padding: 25px;
            border: 1px solid rgba(78, 205, 196, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: 0.8s;
        }

        .feature-card:hover::before {
            left: 100%;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(78, 205, 196, 0.2);
        }

        .feature-card h3 {
            color: #ff6b6b;
            font-size: 1.4em;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }

        .feature-card h3::before {
            content: '🎮';
            margin-right: 10px;
            font-size: 1.2em;
        }

        .interactive-demo {
            background: linear-gradient(135deg, #1e3c72, #2a5298);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            margin: 30px 0;
            position: relative;
            overflow: hidden;
        }

        .interactive-demo::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><cir[...]