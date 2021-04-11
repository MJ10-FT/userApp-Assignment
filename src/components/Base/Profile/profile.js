import { Backup } from '@material-ui/icons';
import React, { useState } from 'react';
import uploadBlob from '../../../services/Upload';
import './profile.css';
import Button from '@material-ui/core/Button';

const Profile = () => {
    
    const [values, setvalues] = useState( {file: '',imagePreviewUrl: ''});

const _handleSubmit= (e)=> {
        e.preventDefault();
        // TODO: do something with -> values.file
        console.log('handle uploading-', values.file);
        uploadBlob(values.file)
      }
    
const _handleImageChange= (e)=> {
        e.preventDefault();
        
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            setvalues({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

    return (
        <div className= 'profile'>
            <div className= 'profile-photo-area'>
                <div className= 'profile-dashed-border'>
                <img className= 'photo' src={values.imagePreviewUrl} />
                    <div className= 'profile-text'>
                        <div style={{fontSize: '30px', fontWeight: 600, color: '#31364c'}}>Add a profile Image</div>
                        <div style= {{display: 'flex', marginTop: '20px', justifyContent: 'space-between'}}>
                            <Button style= {{color: '#18d0d7', backgroundColor: '#252a41', 
                            width: '31%', fontSize: '9px', fontWeight: 500, height: '26px'}}
                            onClick = {_handleSubmit}>
                                <span style= {{position: 'relative', top: '1px', right: '4px'}}>
                                    <Backup style= {{fill: '#18d0d7', fontSize: '12px'}} />
                                </span>
                                Upload File
                            </Button>

                            &nbsp;
                            &nbsp;
                            
                            <input className="fileInput"
                            type="file" 
                            onChange={_handleImageChange} />
                        </div>
              
                        
        
                    </div>
                </div>
            </div>           
        </div>
      );
}
 
export default Profile;