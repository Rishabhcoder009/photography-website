const counters=document.querySelectorAll(".stat h2");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter=entry.target;

        const target=+counter.dataset.target;

        let current=0;

        const step=Math.max(1, Math.ceil(target/100));

        const update=()=>{

            current+=step;

            if(current>=target){

                counter.innerText=target;

                return;

            }

            counter.innerText=current;

            requestAnimationFrame(update);

        };

        update();

        observer.unobserve(counter);

    });

});

counters.forEach(counter=>observer.observe(counter));