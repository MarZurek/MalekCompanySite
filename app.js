function skopiujDoSchowka(adresEmail) {
    var textarea = document.createElement('textarea');
    textarea.value = adresEmail;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    var toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function(){
        toast.className = "toast";
    }, 2000);
}