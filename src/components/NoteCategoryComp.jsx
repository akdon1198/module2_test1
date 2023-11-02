import "./NoteCategoryComp.css"
function NoteCategory({setpopuptoggle, popuptoggle, groupdata, setgroupnumber, groupnumber}){
    return(
        <div className="notecat-cont">
            <div className="title">Pocket Notes</div>
            <button onClick={() => setpopuptoggle(!popuptoggle)}>+ Create Notes group</button>
            <div className="group-container">
                {
                    groupdata.map((group, index) => {
                        return (
                            <div className="group" style={groupnumber == index ? {backgroundColor:"#F7ECDC"}:{}} onClick={()=>setgroupnumber(index)}>
                                <div className="groupicon">
                                    <img src={group.groupcolor} alt="" />
                                    <h3>{group.groupname.slice(0, 2).toUpperCase()}</h3>
                                </div>
                                <div className="groupname">{group.groupname}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NoteCategory