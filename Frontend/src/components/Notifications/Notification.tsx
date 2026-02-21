import { notification } from 'antd';
import { useEffect } from 'react';

type ComponentProps ={
    Type: number
    Message: string
}

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Notification = ({Type, Message}: ComponentProps) =>{
    const [api, contextHolder] = notification.useNotification();
    
    const openNotification = (Type: number, Message: string) => {
        let TypeTitle = ''
        let typeNotification: NotificationType
        switch(Type){
            case 200:
                TypeTitle = 'Successfully operation'
                typeNotification = 'success'
                break;
            case 201:
                TypeTitle = 'Successfully creation'
                typeNotification = 'success'
                break;
            default:
                TypeTitle = "Ops, we have a problem"
                typeNotification = 'error'
                break

        }
        
        api[typeNotification]({
            title: `${TypeTitle}`,
            
            description: Message,
            placement: "bottomRight",
        });
    };
        
    useEffect(() => {
        if (Message) {
            openNotification(Type, Message);
        }
    });
    return(
        <>
            {contextHolder}
        </>
    )
}

export default Notification