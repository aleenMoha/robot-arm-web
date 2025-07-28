# 🤖 Robot Arm Control Panel – Smart Methods Project

This project is a simple web-based interface to control a 6-DOF robot arm. It allows users to adjust servo angles, save poses, run them, and manage saved entries using PHP, HTML, CSS, JavaScript, and MySQL.

---

## 🧰 Tools Used

- **XAMPP** (Apache, MySQL)
- **VS Code**
- **phpMyAdmin**
- **Web Languages**: HTML, CSS, JavaScript, PHP

---

## 🗄️ Database Structure

Create a database named `robot_arm` and run the following SQL:

```sql
CREATE TABLE pose (
  id INT AUTO_INCREMENT PRIMARY KEY,
  motor1 INT,
  motor2 INT,
  motor3 INT,
  motor4 INT,
  motor5 INT,
  motor6 INT
);

CREATE TABLE run (
  motor1 INT,
  motor2 INT,
  motor3 INT,
  motor4 INT,
  motor5 INT,
  motor6 INT,
  status TINYINT DEFAULT 0
);
```
---

## 📁 Project Structure
robot_arm_control/
│
├── index.html           # Main control panel page
├── style.css            # Styling for the page
├── script.js            # JavaScript for sliders & AJAX
├── db.php               # Database connection file
├── save_pose.php        # Saves new pose to DB
├── get_all_poses.php    # Fetches saved poses
├── remove_pose.php      # Deletes a pose
├── get_run_pose.php     # Sends run command
└── update_status.php    # Resets status to 0

---

## 🚀 Features
- Control 6 servo motors using sliders.
- Save current pose to the database.
- Load and apply any saved pose.
- remove a pose from the list.
- Send pose to "run" table with status = 1.
- Reset all statuses to 0.

---

# author: Aleen Mohammad
