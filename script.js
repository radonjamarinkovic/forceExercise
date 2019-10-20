/*
*****************************
***** VITAMIN 2 EXERCISE ****
*****************************

 # Get the list of p tags
 # wrap all letters inside p with <span>
 # grab all newsly created span elements
 # add onMoouseOver to span elements
 # if letter is hovered append .animated class and
 # add event listener for animation end
 # when animation is done remove .animated class
 # remove event listener */

let nodeList = document.querySelectorAll(".text");
nodeList.forEach(p => {
  p.innerHTML = p.textContent.replace(/([A-z0-9'<>/])/g, "<span>$1</span>");
});

let toAnimate = document.querySelectorAll("span");
toAnimate.forEach(letter => {
  letter.onmouseover = () => {
    letter.classList.add("animated");
    letter.addEventListener(
      "webkitAnimationEnd",
      removeClass = e => {
        e.target.classList.remove("animated");
        e.target.removeEventListener("webkitAnimationEnd", removeClass);
      },
      false
    );
  };
});

/*
 ****************************************************
 **** more dynamic solution for creating content ****
 ****************************************************

 # watch out for hoisting

createTextWithForce = (tag, attributes, content) => {
  const el = document.createElement(tag);

  for (key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  content = content.replace(/([A-z0-9'<>/])/g, "<span>$1</span>");
  el.innerHTML = content;
  return el;
};

const forceText = createTextWithForce("p", { class: "text" }, "Some text");
document.querySelector(".content").appendChild(forceText);
*/
