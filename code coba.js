document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    
    // Olah data login
    if (username === 'admin' && password === '1234') {
        alert('Login berhasil!');
    } else {
        alert('Login gagal, periksa username dan password Anda.');
        
    }
    
    
    const email = document.getElementById('email').value;
    
    // Regex untuk validasi email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    // Validasi email
    if (!emailPattern.test(email)) {
        alert('Email tidak valid.');
        
    }
    


});
