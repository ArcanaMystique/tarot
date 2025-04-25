
document.getElementById('tirageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    
    fetch("https://hook.eu2.make.com/p4hu8v32iq933t6q1wdq64es6fpk1scf", {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            document.getElementById('confirmation').style.display = 'block';
            document.getElementById('tirageForm').reset();
        } else {
            alert('Erreur lors de l'envoi.');
        }
    }).catch(error => {
        alert('Erreur réseau : ' + error);
    });
});
