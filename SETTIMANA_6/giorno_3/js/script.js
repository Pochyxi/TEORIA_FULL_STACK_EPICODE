let popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
let popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

console.log('ciao')