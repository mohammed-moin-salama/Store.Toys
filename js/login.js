var use = 1;
var pas = 1;
var list = ['1', '2', localStorage.getItem(use), listt];
var list2 = ['moh', 'moh', localStorage.getItem(pas), list22];







    var form = document.getElementById('form');
    var btnclick = document.getElementById('btn');
    var frmNews = document.getElementById('frmNews');
    var newsDiv = document.getElementById('newsDiv');
    form.addEventListener('submit', login);
    btnclick.addEventListener('click', btn);
    frmNews.addEventListener('submit', add);
    function login(event) {
            if (!form.checkValidity()) {
        event.preventDefault();
    event.stopPropagation();
            }
    else {
        form.classList.add('was-validated');

    var id = list.indexOf(form.elements.user.value);
    var name = list2.indexOf(form.elements.pass.value);
    if (id == name && id != -1 && name!=-1) {
        window.location = 'index.html';
    event.preventDefault();
    event.stopPropagation();
                }
    else {
        alert('please inter user again')
    }
            }
            
        }
    function add(event) {
            if (!frmNews.checkValidity()) {
        event.preventDefault();
    event.stopPropagation();
            }
    frmNews.classList.add('was-validated');
    localStorage.setItem('use',frmNews.elements.id.value);
    localStorage.setItem('pas', frmNews.elements.useradd.value);




    form.classList.add('d-block');

        }
    function btn(event) {
        form.classList.add('d-none');
    newsDiv.classList.toggle('d-none');
    btnclick.classList.toggle('d-none');

        }

