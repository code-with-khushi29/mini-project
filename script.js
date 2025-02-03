function generateTopics() {
    const keyword = document.getElementById("keyword").value.trim();
    const category = document.getElementById("category").value;
    const topicsList = document.getElementById("topicsList");

    topicsList.innerHTML = "";

    if (!keyword) {
        alert("Please enter a keyword!");
        return;
    }

    const topics = {
        technology: [`The Future of ${keyword} in Tech`, `${keyword} and AI Innovations`, `How ${keyword} is Changing the Digital World`],
        health: [`${keyword} and Mental Well-being`, `The Impact of ${keyword} on a Healthy Lifestyle`, `How to Use ${keyword} for Better Health`],
        lifestyle: [`${keyword} Trends to Follow This Year`, `How ${keyword} Can Improve Your Daily Life`, `Balancing ${keyword} with Work and Leisure`]
    };

    const suggestions = topics[category] || [];
    suggestions.forEach(topic => {
        const li = document.createElement("li");
        li.textContent = topic;
        topicsList.appendChild(li);
    });
}
