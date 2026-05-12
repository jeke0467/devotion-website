let devotions = JSON.parse(localStorage.getItem("devotions")) || [
    {
        title: "Trust God",
        verse: "Proverbs 3:5",
        content: "Trust in the Lord with all your heart."
    },
    {
        title: "Do Not Fear",
        verse: "Isaiah 41:10",
        content: "Fear not, for I am with you."
    }
];

const list = document.getElementById("devotionList");
const search = document.getElementById("searchInput");

function save() {
    localStorage.setItem("devotions", JSON.stringify(devotions));
}

function display(data) {
    list.innerHTML = "";

    data.forEach((d, index) => {
        list.innerHTML += `
            <div class="card">
                <h3>${d.title}</h3>
                <b>${d.verse}</b>
                <p>${d.content}</p>
            </div>
        `;
    });
}

function addDevotion() {
    const title = document.getElementById("title").value;
    const verse = document.getElementById("verse").value;
    const content = document.getElementById("content").value;

    if (!title || !verse || !content) return;

    devotions.push({ title, verse, content });

    save();
    display(devotions);

    document.getElementById("title").value = "";
    document.getElementById("verse").value = "";
    document.getElementById("content").value = "";
}

search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = devotions.filter(d =>
        d.title.toLowerCase().includes(value) ||
        d.verse.toLowerCase().includes(value) ||
        d.content.toLowerCase().includes(value)
    );

    display(filtered);
});

display(devotions);