let count = 0;

const counterDisplay = document.getElementById('counterDisplay');
const increaseBtn    = document.getElementById('increaseBtn');
const decreaseBtn    = document.getElementById('decreaseBtn');
const resetBtn       = document.getElementById('resetBtn');

function updateCounter() {
  counterDisplay.textContent = count;
}

increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener('click', () => {
  if (count > 0) {       
    count--;
    updateCounter();
  }
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});


const previewInput     = document.getElementById('previewInput');
const previewParagraph = document.getElementById('previewParagraph');
const charCount        = document.getElementById('charCount');
const clearBtn         = document.getElementById('clearBtn');

function updatePreview() {
  const value = previewInput.value;
  if (value === '') {
    previewParagraph.textContent = 'Your text will appear here';
  } else {
    previewParagraph.textContent = value;
  }
  charCount.textContent = 'Characters: ' + value.length;
}

previewInput.addEventListener('input', updatePreview);

clearBtn.addEventListener('click', () => {
  previewInput.value = '';
  updatePreview();
  previewInput.focus();   
});


const imageSelect    = document.getElementById('imageSelect');
const picture        = document.getElementById('picture');
const pictureCaption = document.getElementById('pictureCaption');

const altTexts = {
  'images/img1.jpg': 'Kittens',
  'images/img2.jpg': 'Puppies',
  'images/img3.jpg': 'Rabbits'
};

imageSelect.addEventListener('change', () => {
  const src = imageSelect.value;
  picture.src = src;
  picture.alt = altTexts[src];
  pictureCaption.textContent = imageSelect.options[imageSelect.selectedIndex].text;
});


const keyInput   = document.getElementById('keyInput');
const keyStatus  = document.getElementById('keyStatus');
const keyResult  = document.getElementById('keyResult');

keyInput.addEventListener('keydown', (event) => {
  
  keyStatus.textContent = 'Last key pressed: ' + event.key;

  if (event.key === 'Enter') {
    keyResult.textContent = 'Submitted: ' + keyInput.value;
    event.preventDefault();           
  }

  if (event.key === 'Escape') {
    keyInput.value = '';
    keyResult.textContent = '';
    keyStatus.textContent = 'Press any key...';
  }
});


const focusCard        = document.getElementById('focusCard');
const cardInstruction  = document.getElementById('cardInstruction');


focusCard.addEventListener('mouseenter', () => {
  focusCard.classList.add('highlight');
  cardInstruction.textContent = 'Mouse is over the card (mouseenter fired).';
});

focusCard.addEventListener('mouseleave', () => {
  focusCard.classList.remove('highlight');
  cardInstruction.textContent = 'Mouse left the card (mouseleave fired).';
});


focusCard.addEventListener('focus', () => {
  focusCard.classList.add('highlight');
  cardInstruction.textContent = 'Card is focused (focus event fired).';
});

focusCard.addEventListener('blur', () => {
  focusCard.classList.remove('highlight');
  cardInstruction.textContent = 'Card lost focus (blur event fired).';
});