

const articles = {

    1: {
        category: "Technology",
        title: "How Technology Is Changing the Way We Live",
        date: "July 20, 2026",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        text: "Technology has become an important part of our everyday lives. From smartphones and artificial intelligence to cloud computing and digital communication, technology has changed how we work, learn and connect with others. The future will bring even more innovative tools that can make our lives easier and more connected."
    },

    2: {
        category: "Technology",
        title: "The Future of Web Development",
        date: "July 18, 2026",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        text: "Web development continues to evolve quickly. Modern developers are using powerful JavaScript frameworks, responsive design and artificial intelligence to create faster and more useful digital experiences. Learning the fundamentals of HTML, CSS and JavaScript remains an excellent starting point for anyone interested in building websites."
    },

    3: {
        category: "Lifestyle",
        title: "Simple Habits for a Better Life",
        date: "July 15, 2026",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80",
        text: "Improving your lifestyle does not always require huge changes. Simple habits such as getting enough sleep, staying organized, exercising regularly and taking breaks can improve your daily life. Small improvements made consistently can create meaningful long-term results."
    },

    4: {
        category: "Travel",
        title: "Why Traveling Changes Your Perspective",
        date: "July 12, 2026",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        text: "Traveling gives us the opportunity to explore new places, cultures and ideas. Experiencing different environments can help us understand the world from a new perspective and create memories that stay with us for a lifetime."
    },

    5: {
        category: "Creativity",
        title: "How to Unlock Your Creative Potential",
        date: "July 10, 2026",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
        text: "Creativity is not limited to artists. Everyone can develop creative thinking by exploring new ideas, trying different approaches and allowing themselves to make mistakes. Keeping a notebook, reading regularly and taking time away from distractions can help your creativity grow."
    },

    6: {
        category: "Technology",
        title: "Why Cybersecurity Matters Today",
        date: "July 8, 2026",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        text: "As more of our personal information moves online, cybersecurity becomes increasingly important. Using strong passwords, enabling two-factor authentication and being careful with suspicious links are simple ways to protect your digital identity."
    },

    7: {
        category: "Lifestyle",
        title: "A Simple Guide to Better Productivity",
        date: "July 5, 2026",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        text: "Productivity is about working smarter, not simply working longer. Creating a clear task list, prioritizing important work and taking regular breaks can help you stay focused and accomplish more throughout the day."
    }

};




const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const themeBtn = document.getElementById("themeBtn");

const searchInput =
    document.getElementById("searchInput");

const categoryButtons =
    document.querySelectorAll(".category-btn");

const blogCards =
    document.querySelectorAll(".blog-card");

const noResults =
    document.getElementById("noResults");

const loadMoreBtn =
    document.getElementById("loadMoreBtn");

const articleModal =
    document.getElementById("articleModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDate =
    document.getElementById("modalDate");

const modalText =
    document.getElementById("modalText");

const relatedArticles =
    document.getElementById("relatedArticles");

const commentForm =
    document.getElementById("commentForm");

const commentsList =
    document.getElementById("commentsList");

let selectedCategory = "all";




if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {

            menuBtn.textContent = "✕";

        } else {

            menuBtn.textContent = "☰";

        }

    });

}




document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });




const savedTheme =
    localStorage.getItem("blogTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

}


if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        if (isDark) {

            themeBtn.textContent = "☀️";

            localStorage.setItem(
                "blogTheme",
                "dark"
            );

        } else {

            themeBtn.textContent = "🌙";

            localStorage.setItem(
                "blogTheme",
                "light"
            );

        }

    });

}




function filterArticles() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    blogCards.forEach(card => {

        const category =
            card.dataset.category.toLowerCase();

        const title =
            card.querySelector("h3")
            .textContent
            .toLowerCase();

        const description =
            card.querySelector("p")
            .textContent
            .toLowerCase();

        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;

        const searchMatch =
            title.includes(searchValue) ||
            description.includes(searchValue) ||
            category.includes(searchValue);

        if (categoryMatch && searchMatch) {

            card.style.display = "";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleCount === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}




if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterArticles
    );

}




categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        filterArticles();

    });

});




if (loadMoreBtn) {

    loadMoreBtn.addEventListener("click", () => {

        document
            .querySelectorAll(".extra-card")
            .forEach(card => {

                card.classList.add("show");

            });

        loadMoreBtn.classList.add("hidden");

    });

}




function openArticle(id) {

    const article =
        articles[id];

    if (!article) return;


    modalImage.src =
        article.image;

    modalImage.alt =
        article.title;

    modalCategory.textContent =
        article.category;

    modalTitle.textContent =
        article.title;

    modalDate.textContent =
        article.date + " • 5 min read";

    modalText.textContent =
        article.text;


    articleModal.classList.add("show");

    document.body.classList.add("modal-open");


    loadComments(id);

    loadRelatedArticles(id);

    articleModal.dataset.currentId = id;

}




document.addEventListener("click", event => {

    const button =
        event.target.closest(
            "[data-id]"
        );

    if (!button) return;

    const id =
        button.dataset.id;

    if (articles[id]) {

        openArticle(id);

    }

});




function closeArticle() {

    articleModal.classList.remove("show");

    document.body.classList.remove("modal-open");

}


closeModal.addEventListener(
    "click",
    closeArticle
);


modalOverlay.addEventListener(
    "click",
    closeArticle
);




document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            articleModal.classList.contains("show")
        ) {

            closeArticle();

        }

    }
);




function loadRelatedArticles(currentId) {

    relatedArticles.innerHTML = "";

    const current =
        articles[currentId];

    Object.keys(articles)
        .filter(id => {

            return (
                id !== String(currentId) &&
                articles[id].category === current.category
            );

        })
        .slice(0, 2)
        .forEach(id => {

            const article =
                articles[id];

            const card =
                document.createElement("div");

            card.className =
                "related-card";

            card.dataset.id = id;

            card.innerHTML = `

                <img
                    src="${article.image}"
                    alt="${article.title}"
                >

                <div>

                    <h4>
                        ${article.title}
                    </h4>

                    <small>
                        ${article.date}
                    </small>

                </div>

            `;

            relatedArticles.appendChild(card);

        });

}




function getComments(id) {

    return JSON.parse(
        localStorage.getItem(
            "comments_" + id
        )
    ) || [];

}


function saveComments(id, comments) {

    localStorage.setItem(
        "comments_" + id,
        JSON.stringify(comments)
    );

}


function loadComments(id) {

    commentsList.innerHTML = "";

    const comments =
        getComments(id);


    if (comments.length === 0) {

        commentsList.innerHTML = `
            <p style="color:#8a92a3; margin-top:20px;">
                No comments yet. Be the first to comment!
            </p>
        `;

        return;

    }


    comments.forEach(comment => {

        const div =
            document.createElement("div");

        div.className =
            "comment";

        div.innerHTML = `

            <strong>
                ${escapeHTML(comment.name)}
            </strong>

            <p>
                ${escapeHTML(comment.text)}
            </p>

        `;

        commentsList.appendChild(div);

    });

}




if (commentForm) {

    commentForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                document
                .getElementById("commentName")
                .value
                .trim();

            const text =
                document
                .getElementById("commentText")
                .value
                .trim();

            const id =
                articleModal.dataset.currentId;


            if (!name || !text) {

                alert(
                    "Please enter your name and comment."
                );

                return;

            }


            const comments =
                getComments(id);


            comments.push({
                name: name,
                text: text
            });


            saveComments(
                id,
                comments
            );


            commentForm.reset();

            loadComments(id);

        }
    );

}




function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}




function shareArticle(platform) {

    const title =
        modalTitle.textContent;

    const url =
        window.location.href;


    let shareUrl = "";


    if (platform === "facebook") {

        shareUrl =
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    }


    if (platform === "twitter") {

        shareUrl =
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;

    }


    if (platform === "linkedin") {

        shareUrl =
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

    }


    if (shareUrl) {

        window.open(
            shareUrl,
            "_blank",
            "width=600,height=500"
        );

    }

}


document
    .getElementById("shareFacebook")
    .addEventListener(
        "click",
        () => shareArticle("facebook")
    );


document
    .getElementById("shareTwitter")
    .addEventListener(
        "click",
        () => shareArticle("twitter")
    );


document
    .getElementById("shareLinkedin")
    .addEventListener(
        "click",
        () => shareArticle("linkedin")
    );




document
    .getElementById("copyLink")
    .addEventListener(
        "click",
        async() => {

            try {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                alert(
                    "Article link copied!"
                );

            } catch {

                alert(
                    "Unable to copy the link."
                );

            }

        }
    );




document
    .getElementById("currentYear")
    .textContent =
    new Date().getFullYear();




const sections =
    document.querySelectorAll(
        "section[id]"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 100;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

    }
);




console.log(
    "BlogSpace Task 5 loaded successfully."
);
