#!/bin/bash

echo "🚀 React Image Watermark - Local Testing"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the image-watermark directory"
    exit 1
fi

echo "📦 Building your package..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

echo ""
echo "🎯 Choose a testing method:"
echo "1. Simple HTML test (opens in browser)"
echo "2. Vite development server (recommended)"
echo "3. Both"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🌐 Opening HTML test..."
        open test-local.html
        echo "✅ HTML test opened in your browser!"
        ;;
    2)
        echo "⚡ Starting Vite development server..."
        cd dev-test
        npm install
        npm run dev
        ;;
    3)
        echo "🌐 Opening HTML test..."
        open test-local.html
        echo "⚡ Starting Vite development server..."
        cd dev-test
        npm install
        npm run dev
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
