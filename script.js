let count = localStorage.getItem("visitorCount");

if (count === null) {
    count = 1;
} else {
    count = Number(count) + 1;
}

localStorage.setItem("visitorCount", count);

document.getElementById("count").innerText = count;