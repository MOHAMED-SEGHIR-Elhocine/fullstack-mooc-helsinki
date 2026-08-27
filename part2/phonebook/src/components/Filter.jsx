
const Filter = ({search,handleSearching}) => {
    
    return (
            <div>
        filter shown with <input 
        value = {search}
        onChange={handleSearching}
         />
        </div>
    )


}


export default Filter