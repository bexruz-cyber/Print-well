const hamburgerBtn = document.getElementById('hamburger-btn')
const sidebar = document.getElementById('mobile-sidebar')

const toggleSidebar = () => {
  const isOpen = sidebar.classList.contains('open')

  if (isOpen) {
    sidebar.classList.remove('open')
    hamburgerBtn.classList.remove('open')
    document.body.classList.remove('sidebar-open')
  } else {
    sidebar.classList.add('open')
    hamburgerBtn.classList.add('open')
    document.body.classList.add('sidebar-open')
  }
}

hamburgerBtn.addEventListener('click', toggleSidebar)

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    toggleSidebar()
  }
})
