function updateValue(motor) {
  document.getElementById(`val${motor}`).innerText = document.getElementById(`m${motor}`).value;
}

function reset() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`m${i}`).value = 90;
    updateValue(i);
  }
}

function savePose() {
  const values = [];
  for (let i = 1; i <= 6; i++) {
    values.push(parseInt(document.getElementById(`m${i}`).value));
  }

  console.log("Sending motors:", values); // <== Debug

  fetch('save_pose.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ motors: values })
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    loadPoseTable(); // reload table after save
  });
}


  fetch('save_pose.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ motors: values })
  })
  .then(res => res.text())
  .then(msg => {
    alert(msg);
    loadPoseTable();
  });

function run() {
  const values = [];
  for (let i = 1; i <= 6; i++) {
    values.push(parseInt(document.getElementById(`m${i}`).value));
  }

  fetch('get_run_pose.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ motors: values })
  })
  .then(res => res.text())
  .then(msg => alert(msg))
  .catch(err => console.error("Run error:", err));
}

function loadPoseTable() {
  fetch('get_all_poses.php')
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#poseTable tbody");
      tbody.innerHTML = "";

      data.forEach((row, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${row.motor1}</td>
          <td>${row.motor2}</td>
          <td>${row.motor3}</td>
          <td>${row.motor4}</td>
          <td>${row.motor5}</td>
          <td>${row.motor6}</td>
          <td>
            <button onclick='loadPose(${JSON.stringify(row)})'>Load</button>
            <button onclick='removePose(${row.id})'>Remove</button>
          </td>
        `;

        tbody.appendChild(tr);
      });
    });
}

function loadPose(pose) {
  for (let i = 1; i <= 6; i++) {
    document.getElementById(`m${i}`).value = pose[`motor${i}`];
    updateValue(i);
  }
}

function removePose(id) {
  fetch(`remove_pose.php?id=${id}`)
    .then(res => res.text())
    .then(msg => {
      alert(msg);
      loadPoseTable();
    });
}

// Load table on page load
window.onload = loadPoseTable;
