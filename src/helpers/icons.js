import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMale, faLock } from "@fortawesome/free-solid-svg-icons"

const Icons =() =>{
  library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMale, faLock, fab)
}


export default Icons;