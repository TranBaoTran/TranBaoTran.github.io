if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}

if (document.getElementById('contact_link')) {
  document.getElementById('contact_link').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({behavior: "smooth"})
  })
}