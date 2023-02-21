<script>
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('nav ul');

  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });
</script>
