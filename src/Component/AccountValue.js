import React, {useState} from 'react'

function AccountValue() {
    const [Value, setValue] = useState([
        {
            name : 'It Front',
            value : 20,
            text : 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.'
        },
        {
            name : 'It Back',
            value : 25,
            text : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
        },
        {
            name : 'Excel',
            value : 10,
            text : 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
        },

    ])


    
    return (
        <div id = 'acc-value'>
            <div id = 'acc-value-block'>
                {Value.map(item => {
                    return(
                        <div className = 'acc-value-group'>
                            <div className = 'acc-value-header flex'>
                                <h6>{item.name}</h6>
                                <span>{item.value}</span>
                            </div>
                            <div className = 'acc-value-text flex' >
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AccountValue
