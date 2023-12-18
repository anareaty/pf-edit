const managePopovers = () => {
    let popNum = 1

    const getTop = (el) => {el.offsetTop + (el.offsetParent && getTop(el.offsetParent))}
    
    let internalLinks = document.querySelectorAll('a.internal-link');
    internalLinks.forEach((link) => {
      link.addEventListener('mouseover', (e) => {
        let linkId = e.target.id;
        let bareId = linkId.slice(5)
        let popoverId = "popover-" + bareId
     
        //document.getElementById(popoverId).classList.add('popover-hover');




        setTimeout(() => {
          document.getElementById(popoverId).classList.add('popover-hover');
        }, 1000);





        document.getElementById(popoverId).style.zIndex = popNum
        popNum++
        document.getElementById(popoverId).style.top = e.target.offsetTop + 75 + 'px';
        document.getElementById(popoverId).style.left = e.clientX - 250 + 'px';
     
        
      });

      link.addEventListener('mouseout', (e) => {
        let linkId = e.target.id;
        let bareId = linkId.slice(5)
        let popoverId = "popover-" + bareId
        setTimeout(() => {
          document.getElementById(popoverId).classList.remove('popover-hover');
        }, 200);
      });
    });


    let popovers = document.querySelectorAll('div.pp');
    popovers.forEach((pop) => {
      pop.addEventListener('mouseenter', (e) => {
        let popoverId = e.target.id;
        document.getElementById(popoverId).classList.add('popover-hover-self');
      });

      pop.addEventListener('mouseleave', (e) => {
        let popoverId = e.target.id;
        document.getElementById(popoverId).classList.remove('popover-hover-self');
        setTimeout(() => {
          document.getElementById(popoverId).classList.remove('popover-hover');
        }, 200);
      });
    });

    
  }
  document.addEventListener("DOMContentLoaded", managePopovers);
