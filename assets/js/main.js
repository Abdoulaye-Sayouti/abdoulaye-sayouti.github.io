(function ($) {
  "use strict";
  // preloader start
  let preloader = document.querySelector("#preloader");
  window.addEventListener("load", function () {
    preloader.classList.add("preloaded");
    setTimeout(function () {
      preloader.remove();
    }, 1500);
  });
  // preloader end

  // meanmenu start
  $(".main_menu").meanmenu({
    meanMenuContainer: ".mobile_menu",
    meanScreenWidth: "1399",
  });

  $(".main_menu_2").meanmenu({
    meanMenuContainer: ".mobile_menu_2",
    meanScreenWidth: "991",
  });

  $(".main_menu_3").meanmenu({
    meanMenuContainer: ".mobile_menu_3",
    meanScreenWidth: "991",
  });
  // meanmenu end

  // mobile menu start
  let menutoggole = document.querySelector(".toggle_menu");
  let mobilemenu = document.querySelector(".mobile-menu");
  menutoggole.onclick = function () {
    menutoggole.classList.toggle("active");
    mobilemenu.classList.toggle("active");
  };
  // mobile menu end

  // dark mood start
  var darktoggle = document.querySelector(".dark-btn-icon");
  var home1bgimg = document.querySelector(".page-wrapper");
  var home2bgimg = document.querySelector(".page-wrapper-2");
  

  /**/ 
  function applyTranslation(language) {
    // Assuming translations is the parsed JSON of your translations
    
    document.querySelectorAll('[data-key]').forEach(function(element) {
      var key = element.getAttribute('data-key');
      if (translations[language] && translations[language][key]) {
        element.innerHTML = translations[language][key];
      }
    });
  }


// Add Event Listener to the download button
document.querySelector(".bostami-parsonal-info-btn a").addEventListener("click", function(e) {
    e.preventDefault();

    var span = this.querySelector("[data-key='infoDownloadCV']");
    if(!span) return;  // If span not found, exit function
    
    var spanContent = span.textContent.trim();

    // Define your logic for file selection
    var filePath;
    switch(spanContent) {
        case "download CV EN":
            filePath = "assets/pdf/CV Abdoulaye SAYOUTI SOULEYMANE EN.pdf";
            break;
        case "Télécharger CV FR":
            filePath = "assets/pdf/CV Abdoulaye SAYOUTI SOULEYMANE FR.pdf";
            break;
        default:
            alert("No CV available for download!");
            return;
    }

    // Open the PDF file in a new window/tab
    window.open(filePath, "_blank");
});




  // Function to toggle between English and French
  function toggleLanguage() {
    // Toggle the class on the body element
    var languageImage = document.getElementById('language-image');

    var stringArray = languageImage.src.split('/'); 
    var imageName = stringArray[stringArray.length - 1];
    var newLanguage;
    
    if (imageName === 'fr.png' || localStorage.getItem("language-flag") === "french") {
        // Replace the image with fr.png
        languageImage.src = languageImage.src.replace("fr","eng");
        // Translate to French
        applyTranslation("french");
        newLanguage = "english";
    } else {
        // Replace the image with fr.png
        languageImage.src = languageImage.src.replace("eng","fr");
        // Translate to English
        applyTranslation("english");
        newLanguage = "french";
        
    }
    localStorage.setItem("language-flag", newLanguage);
    
}


  function toggleLanguage2() {
    // Toggle the class on the body element
    var paragraphs = document.querySelectorAll('.translatable');
    var languageImage = document.getElementById('language-image');

    var stringArray = languageImage.src.split('/'); 
    var imageName = stringArray[stringArray.length - 1];
    var newLanguage;
    
    if (imageName === 'fr.png' || localStorage.getItem("language-flag") === "french") {
        // Replace the image with fr.png
        languageImage.src = languageImage.src.replace("fr","eng");
        // Translate to French
        paragraphs.forEach(function (paragraph) {
            if (paragraph.dataset.french) {
                paragraph.textContent = paragraph.dataset.french;
            }
        });
        newLanguage = "english";
    } else {
        // Replace the image with fr.png
        languageImage.src = languageImage.src.replace("eng","fr");
        // Translate to English
        paragraphs.forEach(function (paragraph) {
            if (paragraph.dataset.english) {
                paragraph.textContent = paragraph.dataset.english;
            }
        });
        newLanguage = "french";
        
    }
    localStorage.setItem("language-flag", newLanguage);
    
}

function keepLanguage() {
  // Toggle the class on the body element
  var paragraphs = document.querySelectorAll('.translatable');
  var languageImage = document.getElementById('language-image');

  var stringArray = languageImage.src.split('/'); 
  var imageName = stringArray[stringArray.length - 1];
  if (localStorage.getItem("language-flag") === "english") {
    languageImage.src = languageImage.src.replace("fr","eng");
      // Translate to French
      applyTranslation("french");
  
  } else {
      // Translate to English
      applyTranslation("english");

  }
}


function keepLanguage2() {
  // Toggle the class on the body element
  var paragraphs = document.querySelectorAll('.translatable');
  var languageImage = document.getElementById('language-image');

  var stringArray = languageImage.src.split('/'); 
  var imageName = stringArray[stringArray.length - 1];
  console.log("Image :")
  console.log(localStorage.getItem("language-flag"))
  if (localStorage.getItem("language-flag") === "english") {
    languageImage.src = languageImage.src.replace("fr","eng");
      // Translate to French
      paragraphs.forEach(function (paragraph) {
          if (paragraph.dataset.french) {
              paragraph.textContent = paragraph.dataset.french;
          }
      });
  
  } else {
      // Translate to English
      paragraphs.forEach(function (paragraph) {
          if (paragraph.dataset.english) {
              paragraph.textContent = paragraph.dataset.english;
          }
      });

  }
}



  // Function to toggle the dark theme
  function toggleDarkTheme() {
    // Toggle the class on the body element
    $("body").toggleClass("dark-theme");

    // Store the preference in local storage
    const isDarkTheme = $("body").hasClass("dark-theme");
    localStorage.setItem("darkTheme", isDarkTheme);

    if (isDarkTheme) {
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage =
        "url('assets/img/bg/page-bg-dark-1.jpg')";
    } else {
      darktoggle.src = "assets/img/icon/mon-icon.png";
      home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
      home2bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
    }
  }
  // Check if the user preference is already stored in local storage
  $(document).ready(function () {
    
    const isDarkTheme = localStorage.getItem("darkTheme") === "true";
    // Apply the dark theme if the preference is set to true
    if (isDarkTheme) {
      $("body").addClass("dark-theme");
      darktoggle.src = "assets/img/icon/sun-icon.png";
      home1bgimg.style.backgroundImage =
        "url('assets/img/bg/page-bg-dark-1.jpg')";
    }

   
    // Check for language preference
    const preferredLanguage = localStorage.getItem("language-flag");
    if (preferredLanguage) {
      keepLanguage(); // This will handle toggling the language on page load
    }

    // Attach click event to the specified div
    $(".dark-btn").on("click", toggleDarkTheme);
    $(".lang-btn").on("click", toggleLanguage);
  });
  // dark mood end

  //  client slider start
  if (jQuery(".client_slide_active").length > 0) {
    let acooterbrand = new Swiper(".client_slide_active", {
      slidesPerView: 4,
      loop: true,
      rtl: false,
      infinite: true,
      autoplay: {
        delay: 4000,
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }
  // client slider end

  // portfolio fillter start
  function enableMasonry2() {
    // ----------------------------- isotop gallery

    $(window).on("load", function () {
      if ($("#fillter-item-active").length) {
        var $grid = $("#fillter-item-active").isotope({
          // options
          itemSelector: ".isotop-item",
          percentPosition: true,
          masonry: {
            // use element for option
            columnWidth: ".grid-sizer",
          },
        });

        // filter items on button click
        $(".isotop-menu-wrapper").on("click", "li", function () {
          var filterValue = $(this).attr("data-filter");
          $grid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "li", function () {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            $(this).addClass("is-checked");
          });
        });
      }
    });
  }

  enableMasonry2();
  // portfolio filter end

  // blog slider start
  if (jQuery(".blog-slider-active").length > 0) {
    let acooterbrand = new Swiper(".blog-slider-active", {
      slidesPerView: 1,
      loop: true,
      rtl: false,
      infinite: true,
      autoplay: false,
      pagination: {
        el: ".blog-progation",
        clickable: true,
      },
    });
  }
  // blog slider end

  // contact form
  $(".input-box.name").click(function () {
    $(".input-box.name").addClass("height");
    $(".input-box.name").css("borderBottom", "1px solid #FE7878");
    $(".input-lebel.name").css("color", "#FE7878");
  });

  $(".input-box.gmail").click(function () {
    $(".input-box.gmail").addClass("height");
    $(".input-box.gmail").css("borderBottom", "1px solid #1B74E4");
    $(".input-lebel.gmail").css("color", "#1B74E4");
  });

  $(".input-box.message").click(function () {
    $(".input-box.message").addClass("height");
    $(".input-box.message").css("borderBottom", "1px solid #CE65F3");
    $(".input-lebel.message").css("color", "#CE65F3");
  });
  // contact form end

  // data background
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ") "
    );
  });

  //   odometer
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  let translations = {
    "english": {
      "aboutTitle": "About",
      "aboutText1": "As a passionate problem solver in the realm of real-world challenges, I have honed my expertise in Artificial Intelligence, Software Development, and Telecommunications. With over 2 years of experience as a driven AI engineer, I specialize in crafting NLP and Computer Vision models. My strong foundation in software development further enriches my skill set. I'm also deeply committed to staying abreast of emerging technologies and actively contribute to open-source projects.",
      "aboutText2": "Solving complex problems and leveraging technology to make a positive impact is my driving force.",
      "aboutWhatIDo":"What I Do!",
      "aboutDSTitle":"Data Science",
      "aboutDSDescription":"I specialize in Data Science, crafting and fine-tuning AI/ML/DL models specialy for Natural Language Processing, Large Language Models and Computer Vision.",
      "aboutSDTitle": "Software Development",
      "aboutSDDescription": "I develop web, mobile, and desktop apps. I'm committed to delivering high-quality software, and ensuring efficient model deployments through MLOps.",
      "aboutOSTitle": "Open Source",
      "aboutOSDescription": "I actively and passionately contribute to open-source initiatives within the AI and software development domains, dedicated to supporting and fostering collaboration within the open-source community.",
      "aboutTTitle": "Telecommunications",
      "aboutTDescription": "With a strong background in telecommunications, I have worked on projects involving the configuration of IoT-connected object networks and the implementation of TCP/IP networks.",
      "aboutCompanies": "Companies",

      "resumeTitle": "Resume",
      "resumeEducationTitle": "Education",
      "resumeEducation1.1": "M.Sc In Artificial Intelligence",
      "resumeEducation1.2": "CERI - Avignon University,",
      "resumeEducation1.3": "Avignon - France.",
      "resumeEducation2.1": "M.Sc In ICT For Internet And Multimedia (ERASMUS+ Mobility)",
      "resumeEducation2.2": "University Of Padova,",
      "resumeEducation2.3": "Padova - Italy.",
      "resumeEducation3.1": "Engineer In Telecommunications",
      "resumeEducation3.2": "Sup'Com - University Of Carthage,",
      "resumeEducation3.3": "Tunis - Tunisia.",
      "resumeEducation4.1": "M.Sc In Information And Communications Technology",
      "resumeEducation4.2": "ENET'Com - University Of Sfax,",
      "resumeEducation4.3": "Sfax - Tunisia.",
      "resumeEducation5.1": "B.Sc In Computer Science",
      "resumeEducation5.2": "Faculty Of Sciences Of Gabes,",
      "resumeEducation5.3": "Gabes - Tunisia.",

      "resumeExperienceTitle": "Experience",
      "resumeExperience1.1": "R&D Artificial Intelligence Engineer",
      "resumeExperience1.2": "10.2022 - Present",
      "resumeExperience1.3": "Aix-en-Provence - France.",
      "resumeExperience2.1": "R&D Artificial Intelligence Engineer",
      "resumeExperience2.2": "Enedis AI Lab,",
      "resumeExperience2.3": "Marseille - France.",
      "resumeExperience3.1": "Data Analyst Intern",
      "resumeExperience3.2": "Infineon Technologies,",
      "resumeExperience3.3": "Padova - Italy.",
      "resumeExperience4.1": "Data Scientist Intern",
      "resumeExperience4.2": "SFM Technologies,",
      "resumeExperience4.3": " Tunis - Tunisia.",

      "resumeSkillsTitle": "Technical Skills",
      "resumeSkills1": "Mathematics | Algorithms",
      "resumeSkills2": "Software Development | Docker | Git | GitLab",
      "resumeSkills3": "",

      "resumeKnowledgesTitle": "Knowledges",
      "resumeKnowledges1": "Open Source Projects",
      "resumeKnowledges2": "Flexibility",
      "resumeKnowledges3": "Project Management",
      "resumeKnowledges4": "Problem-Solving",
      "resumeKnowledges5": "MLOps",
      "resumeKnowledges6": "Time Management",
      "resumeKnowledges7": "Computer Vision",
      "resumeKnowledges8": "Deployment",

      "awardsTitle": "Awards",
      "awardsPapersTitles": "Papers + Certifications",
      "awardsPapersRoles": "Co-Author",
      "awardsChallengesAvignon": "Avignon University.",
      "awardsSupcom": "Sup'Com - Tunisia.",

      "portfolioAll": "All",
      "portfolioCompanies": "Companies",
      "portfolioSoftware": "Software",
      "portfolioOpenS": "Open Source",
      "portfolioDS": "Data Science",
      "portfolioMLOps": "MLOps",

      "portfolioTSP1": "Graphical User Interface, UX/UI",
      "portfolioTSP2": "Traveling Salesman Problem (TSP)",
      "portfolioAdd1": "Graphical User Interface , UX/UI",
      "portfolioAdd2": "Address Book",
      "portfolioAfro1": "African Fashion AI Model, Open Source",
      "portfolioAfro2": "Afro Fashion Stable Diffusion",
      "portfolioRasa1": "RASA Open Source Chat Bot , HMI",
      "portfolioRasa2": "Human-Robot Dialogue Interface",
      "portfolioSFM1": "Machine Learning, Internship",
      "portfolioSFM2": "Data Scientist",
      "portfolioInf1": "Business Intelligence (BI), Internship",
      "portfolioInf2": "Data Analyst",
      "portfolioEne1": "Temporary Contract",
      "portfolioEne2": "R&D Artificial Intelligence Engineer",
      "portfolioAiway1": "Permanent Contract",
      "portfolioAiway2": "R&D Artificial Intelligence Engineer",

      "worksSFM": "<p> During my internship at SFM Technologies, I had the opportunity to work on a fascinating project involving Non-Intrusive Load Monitoring (NILM). My primary focus was to implement the NILM model developed by George W. Hart, leveraging the company's building aggregated power dataset. <br/> <br/> Key Achievements: <ol> <li> Implemented the Non-Intrusive Load Monitoring (NILM) model by George W. Hart to analyze and disaggregate power consumption data within the company's building.</li> <li>Worked extensively with real-world power data, performing data preprocessing, feature engineering, and model development to accurately identify and monitor individual appliance usage patterns.</li> <li>Collaborated closely with a cross-functional team to optimize the NILM model's performance and enhance its usability for energy management within the organization.</li> <li>Gained valuable insights into energy consumption patterns and contributed to the company's sustainability efforts by identifying opportunities for energy efficiency improvements.</li> </ol> This internship provided me with hands-on experience in data science, machine learning, and energy analytics, furthering my skills in solving real-world problems using data-driven approaches. It was an enriching experience that allowed me to apply my knowledge and make a meaningful impact in the field of energy management.</p>",
      "worksInfineon": '<p>During my internship at Infineon Technologies, I had the opportunity to work on a significant project titled "Design and Development of a Workflow and Related Methodologies for Validating Automotive FW and SW According to ASPICE and ISO26262 Standards." <br/> <br/> In a rapidly evolving automotive industry where vehicles are becoming increasingly complex with millions of lines of code, the need for safety and compliance with industry standards is paramount. Infineon, a world leader in semiconductors, recognized the importance of adhering to Automotive SPICE and ISO 26262 standards to ensure the safety and quality of their products. <br/> <br/> My internship focused on addressing the challenges faced by Infineon in monitoring and ensuring compliance with these standards throughout the development of hardware and embedded software products, which often spanned several years. To tackle this issue, I conducted a comprehensive study to identify gaps between the standards and their implementation at Infineon. Additionally, I designed and implemented an automated dashboard that consolidated project data, allowing the development and management teams to monitor project details and compliance in real-time. <br/> <br/> This internship not only gave me invaluable hands-on experience in the automotive industry but also allowed me to contribute to the improvement of development processes that are vital for ensuring the safety and reliability of modern vehicles. I am proud to have been part of a team that worked towards reducing errors and defects, ultimately contributing to the well-being of consumers and the financial stability of automotive manufacturers and suppliers.</p>',
      "worksEnedis": "<p>During my internship at Enedis AI Lab, I undertook a multifaceted role that encompassed a diverse range of responsibilities. My primary focus was on the pre-processing and feature extraction of textual and electrical load curve data. Additionally, I explored the field of natural language processing, where I actively contributed to projects such as Named Entity Recognition (NER) for the automated identification of critical information within supplier requests. <br/> <br/> One of the noteworthy aspects of my internship was the development of machine learning models. I crafted models for both binary and multi-class classification, delving into the intriguing realm of zero-shot learning. Furthermore, I designed models for text generation and auto-completion, playing a key role in automating response generation. <br/> <br/> To ensure the practical implementation of these models, I containerized them using Docker and facilitated their deployment in production environments. Moreover, I participated in the creation of user-friendly web interfaces, enhancing the accessibility of these AI solutions to end-users. <br/> <br/> Throughout this enriching experience, I had the opportunity to work with a plethora of cutting-edge technologies, including Python, PyTorch, NumPy, Pandas, Scikit-Learn, RegEx, CamemBERT, BARThez, PostgreSQL, Flask, Docker, CodeCarbon, and GitLab. <br/> <br/> In summary, my internship at Enedis AI Lab afforded me a comprehensive and diverse experience, allowing me to gain expertise in data processing, natural language processing, and machine learning model development. It also equipped me with practical skills in model deployment and interface development, contributing significantly to my professional growth.</p>",
      "worksAiway": "<p>At Aiway, I play a pivotal role in ensuring the success of our AI-driven initiatives. My primary responsibilities revolve around meticulously mapping and conducting comprehensive audits of the models developed within the organization. This crucial task involves identifying and rectifying deficiencies in data quality, as well as optimizing the entire data preparation, training, and model evaluation processes. Through my efforts, we've been able to significantly enhance the efficiency and accuracy of our AI models, ultimately leading to better-informed decision-making and improved project outcomes. <br/> <br/> One of my core competencies lies in the development of custom metrics that empower us to evaluate semantic segmentation models with precision. These tailored metrics have become indispensable tools for assessing the effectiveness of our AI solutions, ensuring that they meet the  standards. In addition to metric development, I'm deeply involved in the training of cutting-edge semantic segmentation models for point clouds. Furthermore, I've spearheaded the establishment of leaderboards to continuously monitor and benchmark our models' performance, fostering a culture of innovation and excellence within the team. <br/> <br/> Beyond semantic segmentation, I've taken on an ambitious project that involves the development of a Python library designed to adapt digital building models (BIM IFC) to accurately reflect real-world construction outcomes. This innovative library focuses on transforming point cloud data into Building Information Modeling (BIM) structures, bridging the gap between digital design and as-built reality. <br/> <br/> To accomplish these tasks, I skillfully leverage a versatile technology stack that includes Python, Open3D, PyTorch3D, IfcOpenShell, BIMcollab ZOOM, MeshLab, Scikit-Learn, and GitLab. These tools empower me to deliver transformative solutions and contribute to Aiway's mission of advancing the intersection of AI and spatial data.</p>",
      "worksAdd": "<p>The JavaFX Address Book App is a user-friendly and efficient desktop application designed to help users manage their contact information seamlessly. This application leverages the power of JavaFX to provide an intuitive and visually appealing user interface for organizing and maintaining personal or professional contact lists. </p> <p> The project was developed using the following tools: <ol> <li>IDE: Netbeans (version 8.2)</li> <li>Framework: JavaFX</li> </ol> </p>",
      "worksTSP": "<p>The TSP Visualization App is a JavaFX desktop application designed to help children understand the Traveling Salesman Problem (TSP) through interactive visualization. This app developpement is dedicated to science education for young audiences. </p> <p> The Traveling Salesman Problem is a classic optimization problem where the goal is to find the shortest path that visits a set of given points. </p> <p>The project follows the Model-View-Controller (MVC) architectural pattern: <ol> <li>Model: Provides the necessary functionality for the graphical interface and represents the .jar file.</li> <li>View: Consists of FXML files that organize and structure the interface components.</li> <li>Controller: Manages view changes and user interactions, with multiple Java classes handling communication between the view and the model.</li> </ol> </p> <p> The project was developed using the following tools: <ol> <li>IDE: Netbeans (version 8.2)</li> <li>Framework: JavaFX</li> <li>Graph Library: Graph Stream (JavaFX 2.0)</li> </ol> </p>",
      "worksAfro": '<p>Afro Fashion Stable Diffusion is an AI model explicitly designed for African fashion. As part of our Inclusive Fashion AI (InFashAI) initiative, we aim to create datasets and AI models that better represent the diversity of the fashion universe. Using almost 100,000 images with their titles and descriptions from the African fashion sales platform <strong> <a href="https://www.afrikrea.com/en" target="_blank">Afrikrea</a> </strong>, we fine-tuned the Stable Diffusion model v1.4. The resulting model generates more relevant African fashion items as it accounts better for African fashion features. Our model is capable of generating improved images of African fashion. </p> <p>We hope this technology will help stylists, designers, and others in their creation and designing process. We are committed to creating more diverse and inclusive AI technologies.</p>',
      "worksRasa": "<p>The project was developed with two of my classmates. The aim of this project is to set up a human-robot dialogue interface (vocal and visual) using the capabilities of programmable humanoid robots: NAO and Pepper from SoftBank Robotics. The final solution is a developed chatbot using the RASA open-source framework and machine learning algorithms. The chatbot is then interfaced with the two robots to act as a welcome agent at the Center for Education and Research in Computer Science (CERI). The bots have two main functionalities: <ol> <li>Consult students timetable and check availability.</li> <li>As well as four secondary social functions: tell jokes, consult the weather, search in a wiki and play some quiz. </li> </ol> </p> <p> The project was developed using the following tools: <ol> <li>Python, HTML, CSS</li> <li>Rasa Open Source</li> <li>Choregraphe Suite</li> <li>Robots : Pepper and NAO</li> <li>Google Clood Speech API</li> <li>REST-API</li> </ol> </p>",
      "worksRole": "R&D Artificial Intelligence Engineer",
      "worksPersonal": "Personal",
      "worksSchoolProject": "School Project",

      "contactText1" :"Whether you have opportunities, questions to ask, collaboration ideas, or simply want to discuss the exciting world of AI, feel free to reach out.",
      "contactText2" :"Send me a message.",
      "contactName" :"name *",
      "contactEmail" :"email *",
      "contactMessage" :"message *",
      "contactSubmit" :"submit",
      
      
      "infoTitle":"R&D Artificial Intelligence Engineer",
      "infoPhone": "Phone",
      "infoLocation":"Location",
      "infoDownloadCV":"download CV EN",
      
      
      "menuAbout":"about",
      "menuResume":"resume",
      "menuWorks":"works",
      "menuAwards":"awards",
      "menuContact":"contact"
    },
    "french": {
      "aboutTitle": "À propos",
      "aboutText1": "Passionné par la résolution de problèmes monde réels, j'ai développé mon expertise dans les domaines de l'intelligence artificielle, du développement de logiciels et des télécommunications. Avec plus de deux ans d'expérience en tant qu'ingénieur en intelligence artificielle motivé, je me spécialise dans la création de modèles de Traitement automatique du langage naturel (NLP) et de vision par ordinateur. Je suis également très attaché à rester à la pointe des technologies émergentes et à contribuer activement à des projets open source.",
      "aboutText2": "Résoudre des problèmes complexes et exploiter les technologies pour avoir un impact positif est ma force motrice.",
      "aboutWhatIDo":"Mes compétences !",
      "aboutDSTitle" : "Science des données",
      "aboutDSDescription" : "Je suis spécialisé dans la science des données, l'élaboration et la mise au point de modèles d'IA/ML/DL en particulier pour le traitement du langage naturel, les grands modèles de langage (LLMs) et la vision par ordinateur.",
      "aboutSDTitle" : "Développement de logiciels",
      "aboutSDDescription" : "Je développe des applications web, mobiles et bureautique. Je m'engage à fournir des logiciels de haute qualité et à assurer des déploiements de modèles efficaces au moyen des MLOps.",
      "aboutOSTitle" : "Open Source",
      "aboutOSDescription" : "Je contribue activement et avec passion aux initiatives open source dans les domaines de l'IA et du développement logiciel, dédié à soutenir et à favoriser la collaboration au sein de la communauté open source.",
      "aboutTTitle" : "Télécommunications",
      "aboutTDescription" : "Fort d'une expertise approfondie dans le domaine des télécommunications, j'ai participé à des projets impliquant la configuration de réseaux d'objets connectés en IoT ainsi que la mise en place de réseaux TCP/IP",
      "aboutCompanies": "Compagnies",

      "resumeTitle": "curriculum vitae",
      "resumeEducationTitle": "Formation",
      "resumeEducation1.1": "Master en Intelligence Artificielle",
      "resumeEducation1.2": "CERI - Université d'Avignon,",
      "resumeEducation1.3": "Avignon - France.",
      "resumeEducation2.1": "Master en ICT For Internet And Multimedia  (Mobilité ERASMUS+)",
      "resumeEducation2.2": "Université de Padova,",
      "resumeEducation2.3": "Padova - Italie.",
      "resumeEducation3.1": "Ingénieur en Télécommunications",
      "resumeEducation3.2": "Sup'Com -Université de Carthage,",
      "resumeEducation3.3": "Tunis - Tunisie.",
      "resumeEducation4.1": "Master en Télécommunications et Systèmes des Réseaux",
      "resumeEducation4.2": "ENET'Com - Université de Sfax,",
      "resumeEducation4.3": "Sfax - Tunisie.",
      "resumeEducation5.1": "Licence en Informatique",
      "resumeEducation5.2": "Faculté des Sciences de Gabès,",
      "resumeEducation5.3": "Gabès - Tunisie.",

      "resumeExperienceTitle": "Expérience",
      "resumeExperience1.1": "Ingénieur R&D en Intelligence Artificielle",
      "resumeExperience1.2": "10.2022 - Présent",
      "resumeExperience1.3": "Aix-en-Provence - France.",
      "resumeExperience2.1": "Ingénieur R&D en Intelligence Artificielle",
      "resumeExperience2.2": "Laboratoire IA d'Enedis,",
      "resumeExperience2.3": "Marseille - France.",
      "resumeExperience3.1": "Stagiaire Analyste de Données",
      "resumeExperience3.2": "Infineon Technologies,",
      "resumeExperience3.3": "Padova - Italie.",
      "resumeExperience4.1": "Stagiaire Data Scientist",
      "resumeExperience4.2": "SFM Technologies,",
      "resumeExperience4.3": "Tunis - Tunisie.",

      "resumeSkillsTitle": "Compétences",
      "resumeSkills1": "Mathématiques | Algorithmes",
      "resumeSkills2": "Développement Logiciel | Docker | Git | GitLab",
      "resumeSkills3": "",

      "resumeKnowledgesTitle": "Connaissances",
      "resumeKnowledges1": "Projets Open Source",
      "resumeKnowledges2": "Flexibilité",
      "resumeKnowledges3": "Gestion de Projet",
      "resumeKnowledges4": "Résolution de Problèmes",
      "resumeKnowledges5": "MLOps",
      "resumeKnowledges6": "Gestion du Temps",
      "resumeKnowledges7": "Vision par Ordinateur",
      "resumeKnowledges8": "Déploiement",

      "awardsTitle": "Certifications",
      "awardsPapersTitles": "Article + Certifications",
      "awardsPapersRoles": "Co-auteur",
      "awardsChallengesAvignon": "Université D'Avignon.",
      "awardsSupcom": "Sup'Com - Tunisie.",

      "portfolioAll": "Tout",
      "portfolioCompanies": "Compagnies",
      "portfolioSoftware": "Logiciels",
      "portfolioOpenS": "Open Source",
      "portfolioDS": "Data Science",
      "portfolioMLOps": "MLOps",

      "portfolioTSP1": "Interface Utilisateur Graphique, UX/UI",
      "portfolioTSP2": "Problème du Voyageur de Commerce (TSP)",
      "portfolioAdd1": "Interface Utilisateur Graphique, UX/UI",
      "portfolioAdd2": "Carnet d'Adresses",
      "portfolioAfro1": "Modèle d'Intelligence Artificielle pour la Mode Africaine, Open Source",
      "portfolioAfro2": "Afro Fashion Stable Diffusion",
      "portfolioRasa1": "Chat Bot RASA Open Source , IHM",
      "portfolioRasa2": "Interface de Dialogue Humain-Robot",
      "portfolioSFM1": "Apprentissage Automatique, Stage",
      "portfolioSFM2": "Data Scientist",
      "portfolioInf1": "Business Intelligence (BI), Stage",
      "portfolioInf2": "Analyste de Données",
      "portfolioEne1": "Alternance",
      "portfolioEne2": "Ingénieur R&D en Intelligence Artificielle",
      "portfolioAiway1": "CDI",
      "portfolioAiway2": "Ingénieur R&D en Intelligence Artificielle",

      "worksSFM": "<p>Pendant mon stage chez SFM Technologies, j'ai eu l'opportunité de travailler sur un projet fascinant impliquant la Surveillance Non Intrusive de la Consommation Électrique (NILM). Mon principal objectif était de mettre en œuvre le modèle NILM développé par George W. Hart, en utilisant l'ensemble de données agrégées de consommation électrique de l'entreprise.<br/> <br/> Réalisations clés: <ol> <li>Mise en œuvre du modèle de Surveillance Non Intrusive de la Consommation Électrique (NILM) de George W. Hart pour analyser et désagréger les données de consommation électrique à l'intérieur des bâtiments de l'entreprise.</li> <li>Travail approfondi avec des données de consommation électrique du monde réel, effectuant la préparation des données, l'ingénierie des caractéristiques et le développement du modèle pour identifier et surveiller avec précision les modèles d'utilisation des appareils individuels.</li> <li>Collaboration étroite avec une équipe interfonctionnelle pour optimiser les performances du modèle NILM et améliorer sa convivialité pour la gestion de l'énergie au sein de l'organisation.</li> <li>Acquisition d'informations précieuses sur les modèles de consommation d'énergie et contribution aux efforts de durabilité de l'entreprise en identifiant des opportunités d'amélioration de l'efficacité énergétique.</li> </ol> Ce stage m'a fourni une expérience pratique en science des données, en apprentissage automatique et en analyse de l'énergie, renforçant ainsi mes compétences pour résoudre des problèmes du monde réel grâce à des approches basées sur les données. Ce fut une expérience enrichissante qui m'a permis d'appliquer mes connaissances et d'avoir un impact significatif dans le domaine de la gestion de l'énergie.</p>",
      "worksInfineon": "<p>Pendant mon stage chez Infineon Technologies, j'ai eu l'opportunité de travailler sur un projet important intitulé 'Conception et développement d'un flux de travail et de méthodologies associées pour la validation des logiciels et du firmware automobiles selon les normes ASPICE et ISO 26262.' <br/> <br/> Dans une industrie automobile en constante évolution où les véhicules deviennent de plus en plus complexes avec des millions de lignes de code, la nécessité de la sécurité et de la conformité aux normes de l'industrie est primordiale. Infineon, leader mondial des semi-conducteurs, a reconnu l'importance de se conformer aux normes Automotive SPICE et ISO 26262 pour garantir la sécurité et la qualité de ses produits. <br/> <br/> Mon stage a été axé sur la résolution des défis auxquels Infineon était confronté pour surveiller et assurer la conformité à ces normes tout au long du développement de produits matériels et logiciels embarqués, qui s'étend souvent sur plusieurs années. Pour relever ce défi, j'ai réalisé une étude approfondie pour identifier les écarts entre les normes et leur mise en œuvre chez Infineon. De plus, j'ai conçu et mis en place un tableau de bord automatisé qui consolidait les données du projet, permettant aux équipes de développement et de gestion de suivre en temps réel les détails du projet et la conformité. <br/> <br/> Ce stage m'a non seulement offert une précieuse expérience pratique dans l'industrie automobile, mais m'a également permis de contribuer à l'amélioration des processus de développement essentiels pour garantir la sécurité et la fiabilité des véhicules modernes. Je suis fier d'avoir fait partie d'une équipe qui a œuvré pour réduire les erreurs et les défauts, contribuant ainsi au bien-être des consommateurs et à la stabilité financière des constructeurs et des fournisseurs automobiles.</p>",
      "worksEnedis": "<p>Pendant mon stage au sein du Laboratoire IA d'Enedis, j'ai occupé un rôle polyvalent qui englobait une gamme diversifiée de responsabilités. Mon principal objectif était la prétraitement et l'extraction de caractéristiques des données de courbes de charge textuelles et électriques. De plus, j'ai exploré le domaine du traitement du langage naturel, où j'ai contribué activement à des projets tels que la Reconnaissance d'Entités Nommées (NER) pour l'identification automatisée des informations critiques dans les demandes des fournisseurs. <br/> <br/> L'un des aspects remarquables de mon stage a été le développement de modèles d'apprentissage automatique. J'ai conçu des modèles à la fois pour la classification binaire et multiclasse, plongeant dans le domaine fascinant du zero-shot learning. De plus, j'ai conçu des modèles pour la génération de texte et l'auto-complétion, jouant un rôle clé dans l'automatisation de la génération de réponses. <br/> <br/> Pour assurer la mise en œuvre pratique de ces modèles, je les ai conteneurisés à l'aide de Docker et facilité leur déploiement dans des environnements de production. De plus, j'ai participé à la création d'interfaces web conviviales, améliorant l'accessibilité de ces solutions d'IA pour les utilisateurs finaux. <br/> <br/> Tout au long de cette expérience enrichissante, j'ai eu l'opportunité de travailler avec une multitude de technologies de pointe, notamment Python, PyTorch, NumPy, Pandas, Scikit-Learn, RegEx, CamemBERT, BARThez, PostgreSQL, Flask, Docker, CodeCarbon et GitLab. <br/> <br/> En résumé, mon stage au Laboratoire IA d'Enedis m'a offert une expérience complète et diversifiée, me permettant d'acquérir de l'expertise dans le traitement des données, le traitement du langage naturel et le développement de modèles d'apprentissage automatique. Il m'a également doté de compétences pratiques en matière de déploiement de modèles et de développement d'interfaces, contribuant significativement à ma croissance professionnelle.</p>",
      "worksAiway": "<p>À Aiway, je joue un rôle essentiel dans la réussite de nos initiatives basées sur l'IA. Mes responsabilités principales tournent autour de la cartographie méticuleuse et de la réalisation d'audits complets des modèles développés au sein de l'organisation. Cette tâche cruciale implique l'identification et la correction des déficiences en matière de qualité des données, ainsi que l'optimisation de l'ensemble des processus de préparation des données, d'entraînement et d'évaluation des modèles. Grâce à mes efforts, nous avons pu améliorer considérablement l'efficacité et la précision de nos modèles d'IA, ce qui a finalement conduit à une prise de décision mieux informée et à de meilleurs résultats de projet. <br/> <br/> Une de mes compétences clés réside dans le développement de métriques personnalisées qui nous permettent d'évaluer les modèles de segmentation sémantique avec une meilleure précision. Ces métriques sur mesure sont devenus des outils indispensables pour évaluer l'efficacité de nos solutions d'IA, veillant à ce qu'elles répondent aux normes. En plus du développement de métriques, je suis profondément impliqué dans l'entraînement de modèles de segmentation sémantique de nuages de points. De plus, j'ai dirigé la création du classement des modèles pour surveiller en permanence et comparer leurs performances, favorisant ainsi une culture d'innovation et d'excellence au sein de l'équipe. <br/> <br/> Au-delà de la segmentation sémantique, j'ai entrepris un projet ambitieux qui consiste en le développement d'une bibliothèque Python conçue pour adapter les modèles de bâtiments numériques (BIM IFC) afin de refléter avec précision les résultats de construction du monde réel. Cette bibliothèque innovante se concentre sur la transformation des données de nuage de points en structures de modélisation des informations du bâtiment (BIM), comblant ainsi le fossé entre la conception numérique et la réalité en construction. <br/> <br/> Pour accomplir ces tâches, j'utilise habilement une pile technologique polyvalente qui comprend Python, Open3D, PyTorch3D, IfcOpenShell, BIMcollab ZOOM, MeshLab, Scikit-Learn et GitLab. Ces outils me permettent de proposer des solutions et de contribuer à la mission d'Aiway visant à faire progresser l'intersection de l'IA et des données spatiales.</p>",
      "worksAdd": "<p>L'application JavaFX Carnet d'adresses est une application de bureau conviviale et efficace conçue pour aider les utilisateurs à gérer leurs informations de contact de manière transparente. Cette application exploite la puissance de JavaFX pour fournir une interface utilisateur intuitive et visuellement attrayante pour organiser et maintenir des listes de contacts personnels ou professionnels.</p> <p>Le projet a été développé en utilisant les outils suivants : <ol> <li>IDE : Netbeans (version 8.2)</li> <li>Framework : JavaFX</li> </ol> </p>",
      "worksTSP": "<p>L'application de visualisation du Problème du Voyageur de Commerce (TSP) est une application de bureau JavaFX conçue pour aider les enfants à comprendre le Problème du Voyageur de Commerce (TSP) grâce à une visualisation interactive. Le développement de cette application est dédié à l'éducation scientifique pour un jeune public.</p> <p>Le Problème du Voyageur de Commerce est un problème d'optimisation classique où l'objectif est de trouver le chemin le plus court qui visite un ensemble de points donnés.</p> <p>Le projet suit le modèle architectural Modèle-Vue-Contrôleur (MVC) : <ol> <li>Modèle : Fournit les fonctionnalités nécessaires pour l'interface graphique et représente le fichier .jar.</li> <li>Vue : Comprend des fichiers FXML qui organisent et structurent les composants de l'interface.</li> <li>Contrôleur : Gère les changements de vue et les interactions avec l'utilisateur, avec plusieurs classes Java gérant la communication entre la vue et le modèle.</li> </ol> </p> <p>Le projet a été développé en utilisant les outils suivants : <ol> <li>IDE : Netbeans (version 8.2)</li> <li>Framework : JavaFX</li> <li>Bibliothèque de graphes : Graph Stream (JavaFX 2.0)</li> </ol> </p>",
      "worksAfro": "<p>Afro Fashion Stable Diffusion est un modèle d'IA spécifiquement conçu pour la mode africaine. Dans le cadre de notre initiative Inclusive Fashion AI (InFashAI), nous visons à créer des ensembles de données et des modèles d'IA qui représentent mieux la diversité de l'univers de la mode. En utilisant près de 100 000 images avec leurs titres et descriptions provenant de la plateforme de vente de mode africaine <strong>Afrikrea</strong>, nous avons affiné le modèle Stable Diffusion v1.4. Le modèle résultant génère des articles de mode africaine plus pertinents, car il prend mieux en compte les caractéristiques de la mode africaine. Notre modèle est capable de générer des images améliorées de la mode africaine.</p> <p>Nous espérons que cette technologie aidera les stylistes, les designers et d'autres acteurs de la création dans leur processus de conception. Nous nous engageons à créer des technologies d'IA plus diverses et inclusives.</p>",
      "worksRasa": "<p>Le projet a été développé avec deux de mes camarades de classe. L'objectif de ce projet est de mettre en place une interface de dialogue homme-robot (vocale et visuelle) en utilisant les capacités de robots humanoïdes programmables. Les robots humanoïdes programmables utilisés sont NAO et Pepper de SoftBank Robotics. La solution finale est un chatbot développé à l'aide du framework open source RASA et d'algorithmes d'apprentissage automatique. Le chatbot est ensuite interfacé avec les deux robots pour agir en tant qu'agent d'accueil au Centre d'Enseignement et de Recherche en Informatique (CERI). Les robots ont deux fonctionnalités principales : <ol> <li>Consulter l'emploi du temps des étudiants et vérifier des disponibilités.</li> <li>Ainsi que quatre fonctions sociales secondaires : raconter des blagues, consulter la météo, effectuer des recherches dans une encyclopédie en ligne et jouer à des quiz.</li> </ol> </p> <p> Le projet a été développé en utilisant les outils suivants : <ol> <li>Python, HTML, CSS</li> <li>Rasa Open Source</li> <li>Choregraphe Suite </li> <li>Robots : Pepper et NAO</li> <li>Google Cloud Speech API</li> <li>REST-API</li> </ol> </p>",
      "worksRole": "Ingénieur R&D en IA",
      "worksPersonal": "Personnel",
      "worksSchoolProject": "Projet Scolaire",

      "contactText1" :"Que vous ayez des opportunités, des questions à poser, des idées de collaboration ou que vous souhaitiez simplement discuter du monde passionnant de l'IA, n'hésitez pas à me contacter.",
      "contactText2" :"Envoyez-moi un message.",
      "contactName" :"nom *",
      "contactEmail" :"email *",
      "contactMessage" :"message *",
      "contactSubmit" :"envoyer",
      
      
      "infoTitle":"Ingénieur R&D en Intelligence Artificielle",
      "infoPhone": "Téléphone",
      "infoLocation":"Adresse",
      "infoDownloadCV":"Télécharger CV FR",
      
      
      "menuAbout":"à propos",
      "menuResume":"CV",
      "menuWorks":"travaux",
      "menuAwards":"certifs",
      "menuContact":"contact"
    }
  };
  // WOW active
  new WOW().init();
}

)(jQuery);
