document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Modal functionality
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  
  // Open modals
  if (loginBtn) {
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      loginModal.style.display = 'block';
    });
  }
  
  if (signupBtn) {
    signupBtn.addEventListener('click', function(e) {
      e.preventDefault();
      signupModal.style.display = 'block';
    });
  }
  
  // Close modals
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      loginModal.style.display = 'none';
      signupModal.style.display = 'none';
    });
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
      signupModal.style.display = 'none';
    }
  });
  
  // Handle form submissions
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // TODO: Add authentication using AWS Cognito
      console.log('Login attempt:', email);
      
      // For demonstration purposes
      alert('Login functionality will be implemented with AWS Cognito');
    });
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const phone = document.getElementById('signup-phone').value;
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      
      // TODO: Add user registration using AWS Cognito
      console.log('Signup attempt:', email);
      
      // For demonstration purposes
      alert('Signup functionality will be implemented with AWS Cognito');
    });
  }
  
  // Calendar functionality
  initCalendar();
  
  // Provider selection
  const providerButtons = document.querySelectorAll('.select-provider');
  providerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Clear any previous selections
      providerButtons.forEach(btn => btn.parentElement.classList.remove('selected'));
      
      // Mark this provider as selected
      this.parentElement.classList.add('selected');
      
      // Update the UI to show selected provider
      const providerName = this.parentElement.querySelector('h4').textContent;
      const specialty = this.parentElement.querySelector('p').textContent;
      
      console.log(`Selected provider: ${providerName}, ${specialty}`);
      
      // Scroll to calendar section or update UI as needed
      document.querySelector('.appointment-calendar').scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Time slot selection
  const timeSlots = document.querySelectorAll('.time-slot');
  timeSlots.forEach(function(slot) {
    slot.addEventListener('click', function() {
      // Clear any previous selections
      timeSlots.forEach(s => s.classList.remove('active'));
      
      // Mark this time slot as selected
      this.classList.add('active');
      
      console.log(`Selected time: ${this.textContent}`);
    });
  });
  
  // Appointment confirmation
  const confirmButton = document.getElementById('confirm-appointment');
  if (confirmButton) {
    confirmButton.addEventListener('click', function() {
      const selectedProvider = document.querySelector('.provider-card.selected');
      const selectedTime = document.querySelector('.time-slot.active');
      const appointmentType = document.querySelector('input[name="appointment-type"]:checked').value;
      
      if (!selectedProvider) {
        alert('Please select a healthcare provider');
        return;
      }
      
      if (!selectedTime) {
        alert('Please select an appointment time');
        return;
      }
      
      const providerName = selectedProvider.querySelector('h4').textContent;
      const appointmentTime = selectedTime.textContent;
      const appointmentDate = document.getElementById('current-month').textContent;
      
      // TODO: Send appointment data to backend using AWS API Gateway and Lambda
      console.log('Appointment details:', {
        provider: providerName,
        date: appointmentDate,
        time: appointmentTime,
        type: appointmentType
      });
      
      // For demonstration purposes
      alert(`Appointment confirmed with ${providerName} on ${appointmentDate} at ${appointmentTime}`);
    });
  }
});

// Calendar initialization function
function initCalendar() {
  const calendar = document.querySelector('.calendar');
  const currentMonthDisplay = document.getElementById('current-month');
  const prevMonthBtn = document.getElementById('prev-month');
  const nextMonthBtn = document.getElementById('next-month');
  
  if (!calendar || !currentMonthDisplay) return;
  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  
  // Update calendar for the current month
  updateCalendar(currentMonth, currentYear);
  
  // Previous month button
  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar(currentMonth, currentYear);
    });
  }
  
  // Next month button
  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar(currentMonth, currentYear);
    });
  }
  
  function updateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    currentMonthDisplay.textContent = `${monthNames[month]} ${year}`;
    
    // Clear the calendar
    calendar.innerHTML = '';
    
    // Add day headers
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.className = 'day-header';
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
    
    // Add blank spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      const blankDay = document.createElement('div');
      blankDay.className = 'day blank';
      calendar.appendChild(blankDay);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const day = document.createElement('div');
      day.className = 'day';
      day.textContent = i;
      
      // Check if this is today's date
      if (year === new Date().getFullYear() && month === new Date().getMonth() && i === new Date().getDate()) {
        day.classList.add('today');
      }
      
      // Make days clickable
      day.addEventListener('click', function() {
        // Remove 'active' class from all days
        document.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
        
        // Add 'active' class to the clicked day
        this.classList.add('active');
        
        // Generate time slots based on the selected date
        generateTimeSlots(year, month, i);
      });
      
      calendar.appendChild(day);
    }
  }
  
  function generateTimeSlots(year, month, day) {
    const timeSlotContainer = document.querySelector('.time-slot-container');
    if (!timeSlotContainer) return;
    
    // Clear existing time slots
    timeSlotContainer.innerHTML = '';
    
    // Generate time slots (this would normally come from the backend)
    // For demonstration purposes, we'll generate random availability
    const startHour = 8; // 8 AM
    const endHour = 17;  // 5 PM
    const selectedDate = new Date(year, month, day);
    const isWeekend = selectedDate.getDay() === 0 || selectedDate.getDay() === 6;
    
    if (isWeekend) {
      // No slots available on weekends
      const message = document.createElement('p');
      message.textContent = 'No appointments available on weekends.';
      timeSlotContainer.appendChild(message);
      return;
    }
    
    // Generate available time slots
    for (let hour = startHour; hour <= endHour; hour++) {
      // Skip lunch hour
      if (hour === 12) continue;
      
      // Generate slots on the hour and half hour
      for (let minutes of [0, 30]) {
        // Randomly determine if this slot is available (70% chance)
        if (Math.random() < 0.7) {
          const time = document.createElement('button');
          time.className = 'time-slot';
          
          // Format the time (12-hour format with AM/PM)
          const hourIn12Format = hour > 12 ? hour - 12 : hour;
          const period = hour >= 12 ? 'PM' : 'AM';
          time.textContent = `${hourIn12Format}:${minutes === 0 ? '00' : minutes} ${period}`;
          
          // Make time slots clickable
          time.addEventListener('click', function() {
            // Remove 'active' class from all time slots
            document.querySelectorAll('.time-slot').forEach(slot => slot.classList.remove('active'));
            
            // Add 'active' class to the clicked time slot
            this.classList.add('active');
          });
          
          timeSlotContainer.appendChild(time);
        }
      }
    }
    
    if (timeSlotContainer.children.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'No available appointments for this date.';
      timeSlotContainer.appendChild(message);
    }
  }
}

// Provider search functionality
const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
  searchBtn.addEventListener('click', function() {
    const searchInput = document.getElementById('provider-search').value.toLowerCase();
    const specialtyFilter = document.getElementById('specialty-filter').value.toLowerCase();
    
    const providerCards = document.querySelectorAll('.provider-card');
    
    providerCards.forEach(function(card) {
      const name = card.querySelector('h4').textContent.toLowerCase();
      const specialty = card.querySelector('p').textContent.toLowerCase();
      
      // Check if the card matches both search criteria
      const matchesSearch = searchInput === '' || name.includes(searchInput) || specialty.includes(searchInput);
      const matchesSpecialty = specialtyFilter === '' || specialty.includes(specialtyFilter);
      
      if (matchesSearch && matchesSpecialty) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
} 