function sendEmail() {
  const emailAddress = "rayusamajaat@gmail.com";
  const emailSubject = "Hire Request";
  const emailMessage = "Hello! I'd like to Hire you.";
  const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`;
  window.location.href = emailURL;
}
function downloadCV() {
  // Replace "cv_file_path.pdf" with the actual path to your CV file.
  // You can use a direct link to the file or use a relative path to the file from the HTML file location.
  const cvFilePath = "https://github.com/aliusa557/sam/raw/main/CV.UsamaMehboob.pdf";

  // Create an anchor element to trigger the download
  const anchor = document.createElement("a");
  anchor.href = cvFilePath;
  anchor.download = "CV.UsamaMehboob.pdf"; // Change the name of the downloaded CV file
  anchor.click();
}
function submit() {
  const emailAddress = "rayusamajaat@gmail.com";
  const emailSubject = "Chat Request";
  const emailMessage = "Hello! I'd like to Chat with you.";
  const emailURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`;
  window.location.href = emailURL;
}