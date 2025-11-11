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

function toggleAccordion (btn) {
  const allAccordions = document.querySelectorAll('.accordion-btn')
  const content = btn.nextElementSibling
  const isOpen = btn.classList.contains('open')

  allAccordions.forEach(b => {
    if (b !== btn) {
      b.classList.remove('open')
      b.nextElementSibling.style.maxHeight = '0px'
    }
  })

  if (!isOpen) {
    btn.classList.add('open')
    content.style.maxHeight = content.scrollHeight + 'px'
  } else {
    btn.classList.remove('open')
    content.style.maxHeight = '0px'
  }
}