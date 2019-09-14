
(
    function(){
        let active = false;
        const nav = document.getElementsByClassName('nav-list')[0];
        document.getElementById('menu-btn').addEventListener('click', (e)=>{
            e.preventDefault();
            active = !active;
            if(active){
                nav.classList.add('expanded');
            }
            else{
                nav.classList.remove('expanded');
            }
        });
    }
)();


w