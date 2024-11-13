document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const commentText = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || commentText === "") {
      document.getElementById("error-message").style.display = "block";
    } else {
      document.getElementById("error-message").style.display = "none";

      const commentList = document.getElementById("comment-list");

      const commentDiv = document.createElement("div");
      commentDiv.className = "flex space-x-4 text-sm text-gray-500";

      const nomElement = document.createElement("h3");
      nomElement.className = "font-medium text-gray-900";
      nomElement.innerText = `${firstName} ${lastName}`;

      const proseDiv = document.createElement("div");
      proseDiv.className = "prose prose-sm mt-4 max-w-none text-gray-500";

      const contenuDiv = document.createElement("div");
      contenuDiv.className = "flex-1 py-10 border-t border-gray-200";

      const paragraphe = document.createElement("p");
      paragraphe.innerText = commentText;

      proseDiv.appendChild(paragraphe);
      contenuDiv.appendChild(nomElement);
      contenuDiv.appendChild(proseDiv);
      commentDiv.appendChild(contenuDiv);
      commentList.appendChild(commentDiv);

      document.getElementById("first-name").value = "";
      document.getElementById("last-name").value = "";
      document.getElementById("message").value = "";
    }
  });
