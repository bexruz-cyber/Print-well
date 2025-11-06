const hamburgerBtn = document.getElementById('hamburger-btn')
const closeBtn = document.getElementById('close-sidebar')
const sidebar = document.getElementById('mobile-sidebar')
const overlay = document.getElementById('overlay')

const openSidebar = () => {
  sidebar.classList.add('open')
  overlay.classList.add('active')
  document.body.style.overflow = 'hidden'
}

const closeSidebar = () => {
  sidebar.classList.remove('open')
  overlay.classList.remove('active')
  document.body.style.overflow = ''
}

hamburgerBtn.addEventListener('click', openSidebar)
closeBtn.addEventListener('click', closeSidebar)
overlay.addEventListener('click', closeSidebar)

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    closeSidebar()
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