export const shorten = word => {
    const splitWord = word.split(" ");
    const shortWord = splitWord[0] + splitWord[1];
    return shortWord
}
export const isInCart =(state , id) =>{
   const result =  !!state.chooseditems.find(item => item.id === id);
   return result;
}

export const countCounter =(state , id) =>{
    const index = state.chooseditems.findIndex(item =>item.id ===id);
    if(index === -1){
        return false;
    }else{
        return state.chooseditems[index].count;
    }
}