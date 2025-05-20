import React from 'react'
// export default function IntroSection() {
//     return (
//         <section>
//             <h1 className="centered">Селевк I Никатор</h1>
//             <h3 className="centered" style= {{color: '#666'}}>Знаете ли вы?</h3>
//         </section>
//     )
// }

export default function IntroSection() {
    return React.createElement('section', null, 
           [React.createElement('h1', {className: 'centered', style: {color: '#666666'}, key: 1}, 'Селевк I Никатор' ),
            React.createElement('h3', {className: 'centered', style: {color: '#666666'}, key: 2}, 'Знаете ли вы?')
            ]
        
)}