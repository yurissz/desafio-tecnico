import { Drawer as MUIDrawer, ListItem, ListItemButton, ListItemText, List } from '@mui/material'
import './drawer.css'

const Drawer = props => {

    const itemList = [{
        text: 'Inbox',

    }, {
        text: 'Inbox'
    }, {
        text: 'Send email'
    }, {
        text: 'Drafts'
    }]

    return (
        <MUIDrawer >
            <>
                <List>
                    {itemList.map((item) => {
                        const { text } = item

                        return (<ListItem key={text} disablePadding>
                            <ListItemButton>
                                {/* <ListItemIcon>  
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                        )
                    })}
                </List>
            </>
        </MUIDrawer>
    )
}

export default Drawer