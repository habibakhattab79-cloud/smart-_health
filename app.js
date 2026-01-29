// ===== THEME =====
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}

// ===== LANGUAGE =====
const lang = localStorage.getItem("language") || "en";

const text = {
  en:{
    title:"Health Dashboard",
    ai:"AI Assistant"
  },
  ar:{
    title:"لوحة الصحة",
    ai:"المساعد الذكي"
  }
};

document.querySelectorAll("[data-text]").forEach(el=>{
  const key = el.dataset.text;
  el.innerText = text[lang][key];
});

// ===== PERMISSIONS =====
function checkCamera(){
  if(localStorage.getItem("camera")!=="true"){
    alert("Camera permission disabled");
    return false;
  }
  return true;
}

function checkNotifications(){
  return localStorage.getItem("notifications")==="true";
}
