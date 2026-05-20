const contactMe = document.getElementById("contactMe");

/**
 * Sends an email to me via the contact form. Although not ideal, uses mailto to send it.
 */
contactMe.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const subject = encodeURIComponent(`A message from ${name.innerHTML}`);

  const body = encodeURIComponent(
    `${message.innerHTML}\n\n` +
      `Regards,\n${name.innerHTML}\n${email.innerHTML}`,
  );

  window.location.href =
    `mailto:azigamarita@gmail.com` + `?subject=${subject}&body=${body}`;
});
