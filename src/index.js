document.getElementById("menu-button").addEventListener("click", function () {
  const menu = document.getElementById("menu");
  const menuOpenIcon = document.getElementById("menu-open");
  const menuCloseIcon = document.getElementById("menu-close");
  const isMenuOpen = !menu.classList.contains("hidden");

  menu.classList.toggle("hidden", isMenuOpen);
  menuOpenIcon.classList.toggle("hidden", !isMenuOpen);
  menuCloseIcon.classList.toggle("hidden", isMenuOpen);
});

//technology section data
const team = [
  {
    avatar: "https://solutionwise.in/assets/images/image01.jpg?v=1b7a2d9c",
    name: "Mobile Apps",

    desc: "Native and Hybrid iOS, Android Applications. Experienced in hand crafting the apps with the latest trends while focusing on user experience",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image05.jpg?v=1b7a2d9c",
    name: "Enterprise Solutions",

    desc: "Tailored Enterprise solutions for your business. Integrations with existing applications. Cloud and On-Site Deployment.",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image02.jpg?v=1b7a2d9c",
    name: "Websites",

    desc: "Custom websites with CMS, E-commerce websites powered by existing frameworks as well as fully custom backend portal!",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image03.jpg?v=1b7a2d9c",
    name: "Experiential Tech",

    desc: "Mobile and Web Applications with Augmented Reality, WebGL, Machine Learning powered Chatbots, Image Recognition & OCR.",
  },
];

//work section data
const work = [
  {
    avatar: "https://solutionwise.in/assets/images/image07.png?v=1b7a2d9c",
    name: "HealthyAlways",

    desc: "HealthyAlways is a Telemedicine solution connecting verified Doctors with Patients via direct 1-1 video calling, sharing notes, medical reports and much more!",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image10.png?v=1b7a2d9c",
    name: "VisualizR",

    desc: "Capture an image of your space and visualise any colour on your walls. It also allows you to share the painted image with your friends & family.",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image08.png?v=1b7a2d9c",
    name: "BioSpan",

    desc: "Biospan Contamination Control Solutions Pvt Ltd is an organization focussed in the field of Cleanroom Contamination Control.",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image11.png?v=1b7a2d9c",
    name: "Connect24 App",

    desc: "Share similar interests, passion, adventures, business ideas and much more with online events, classes and workshops.",
  },
  {
    avatar: "https://solutionwise.in/assets/images/image09.png?v=1b7a2d9c",
    name: "Ape Space Wars",

    desc: "An exclusive Ape NFT collection website. Connect your wallets and mint your apes right from the website.",
  },
];

//function to convert the lists to html
function generateTeamMemberHTML(member) {
  return `
        <li>
            <div class="w-full h-58 sm:h-52 md:h-56">
                <img
                    src="${member.avatar}"
                    class="w-15 h-full object-cover object-center shadow-md rounded-xl"
                    alt="${member.name}"
                />
            </div>
            <div class="mt-4">
                <h4 class="text-lg text-gray-700 font-semibold">${member.name}</h4>
                
                <p class="text-gray-600 mt-2">${member.desc}</p>
               
            </div>
        </li>
    `;
}

const teamList = document.getElementById("team-list");
team.forEach((member) => {
  teamList.innerHTML += generateTeamMemberHTML(member);
});

const workList = document.getElementById("work-list");
work.forEach((member) => {
  workList.innerHTML += generateTeamMemberHTML(member);
});

//features section data
document.addEventListener("DOMContentLoaded", function () {
  const features = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
      title: "Understanding the problem!",
      desc: "We bridge the gap between a project and a solution by actually understanding the problem first and then designing the best possible solution which doesn't just help the business achieve their goals but works as a delight for its users.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>`,
      title: "Delivering quality!",
      desc: "We Solve business problems by providing top-notch solutions by starting at the heart of the problem & fine-tuning our way up to produce the best quality & UX friendly applications.",
    },
    // {
    //   icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>`,
    //   title: "Datacenter security",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.",
    // },
  ];

  const featuresList = document.getElementById("features-list");

  features.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "space-y-3";
    listItem.innerHTML = `
            <div class="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                ${item.icon}
            </div>
            <h4 class="text-lg text-gray-800 font-semibold">
                ${item.title}
            </h4>
            <p>
                ${item.desc}
            </p>
        `;
    featuresList.appendChild(listItem);
  });
});
