let myobj={
    OpenAI:'Chatgpt',
    Anthropic:'Claude',
    Google:"Gemini",
    Microsoft:'Copilot',
    Perplexity:"Perplexity AI"

}

for(const key in myobj){
    console.log(key,':',myobj[key])
}

let arr=['NLP','Computer Vision','LLM','Agentic AI','Big Data']
for(const ind in arr){
    console.log(ind,arr[ind])
}
//maps are not iterable thus for in doesn't works for maps