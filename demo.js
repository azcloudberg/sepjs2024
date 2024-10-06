function trackMood() {
    const moodSelect = document.getElementById('moodSelect');
    const mood = moodSelect.value;
    const result = document.getElementById('result');
    console.log(mood);
    
    if (mood === ""){
        result.textContent = "Please Select a mood";
    }
    let message;
    switch(mood){
        case 'happy':
            message = "Thats great! Keep smiling!"
            break;
        case 'sad':
            message = "Its okay to feel sad sometimes"
            break;
        case 'angry':
            message = "Take a deep breath"
            break;
        case 'excited':
            message = "awsome"
            break;
        default: 
        message = "Please select a valid mood";
        break;    
    }

    message += (mood === 'happy' || mood === 'excited') ? " Have a wonderful day!" : "Things will get better";

    result.textContent = message;

}