
const totalEl = document.getElementById('totalCount');
const interviewEl = document.getElementById('interviewCount');
const rejectedEl = document.getElementById('rejectedCount');
const jobCountEl = document.getElementById("jobCount");
const emptyState = document.getElementById("emptyState");

let currentTab = "all";


document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener("click", () => {
        currentTab = btn.getAttribute("data-tab");
        updateJobs();
    });
});

// Interview / Rejected status
function setStatus(id, status) {
    const job = document.getElementById("job-" + id);
    const badge = job.querySelector(".status-badge");
    const interviewBtn = job.querySelector(".btn-interview");
    const rejectedBtn = job.querySelector(".btn-rejected");

    // Reset btns
    interviewBtn.className = "btn-interview px-3 py-1 border rounded transition-all duration-200";
    rejectedBtn.className = "btn-rejected px-3 py-1 border rounded transition-all duration-200";

    // Toggle
    if (job.getAttribute("status") === status) {
        job.setAttribute("status", "none");
        badge.textContent = "";
        badge.className = "status-badge hidden px-2 py-0.5 rounded text-sm";
        return updateJobs();
    }

    job.setAttribute("status", status);

    if (status === "interview") {
        badge.textContent = "Interview";
        badge.className = "status-badge px-2 py-0.5 rounded text-sm bg-green-500 text-white";
        interviewBtn.className += " bg-green-500 text-white border-green-500";
    } else {
        badge.textContent = "Rejected";
        badge.className = "status-badge px-2 py-0.5 rounded text-sm bg-red-500 text-white";
        rejectedBtn.className += " bg-red-500 text-white border-red-500";
    }

    updateJobs();
}

// Delete job
function deleteJob(id) {
    document.getElementById("job-" + id)?.remove();
    updateJobs();
}

//  count
function updateJobs() {
    const jobs = document.querySelectorAll(".job-card");
    let interview = 0, rejected = 0, showing = 0;

    jobs.forEach(job => {
        const status = job.getAttribute("status") || "none";
        if (status === "interview") interview++;
        if (status === "rejected") rejected++;

        const visible = currentTab === "all" || status === currentTab;
        job.style.display = visible ? "block" : "none";
        if (visible) showing++;
    });

    // Empty state
    if (showing === 0) {
        emptyState.classList.remove("hidden");
        document.getElementById("emptyIcon").innerHTML = '<img src="jobs.png" class="mx-auto w-24">';
        document.getElementById("emptyTitle").textContent = currentTab === "interview" ? "No Interview Jobs Available" : currentTab === "rejected" ? "No Rejected Jobs Available" : "No jobs available";
        document.getElementById("emptySub").textContent = currentTab === "interview" ? "Mark jobs as Interview to see them here." : currentTab === "rejected" ? "Jobs you reject will appear here." : "Check back soon for new job opportunities";
    } else {
        emptyState.classList.add("hidden");
    }

    // Active tab highlight
    document.querySelectorAll(".tab-btn").forEach(btn => {
        const active = btn.getAttribute("data-tab") === currentTab;
        btn.className = "tab-btn px-3 py-1 border rounded transition-all duration-200" + (active ? " bg-[#002c5c] text-white border-[#002c5c]" : "");
    });

    // Count
    totalEl.innerText = jobs.length;
    interviewEl.innerText = interview;
    rejectedEl.innerText = rejected;
    jobCountEl.innerText = showing + " Jobs";
}

updateJobs();