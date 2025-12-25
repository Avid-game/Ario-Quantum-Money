function showManifesto() {
    const nt = document.getElementById('notif');
    nt.style.borderLeft = "5px solid var(--gold)"; // رنگ طلایی برای مانیفست
    nt.innerHTML = `
        <h4 style="color:var(--gold); margin:0;">🌐 AQM Manifesto</h4>
        <p style="font-size:10px; margin-top:8px; line-height:1.4;">
            <b>The Future of Collaboration:</b> AQM is the world's first Human-AI innovative partnership. 
            Points earned here represent <b>Quantum Influence</b>. We prioritize your privacy above all else.
        </p>`;
}
