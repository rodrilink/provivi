import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from '@material-ui/core/Link';

export const mainListItems = (
    <div>
        <Link color="inherit" href="/add">
            <ListItem button >
                <ListItemIcon>
                    <AddIcon />
                </ListItemIcon>
                <ListItemText primary="getASum" />
            </ListItem>
        </Link>
        <Link color="inherit" href="/multiply">
            <ListItem button>
                <ListItemIcon>
                    <ClearIcon />
                </ListItemIcon>
                <ListItemText primary="getAProduct" />
            </ListItem>
        </Link>
        <Link color="inherit" href="/secondpower">
            <ListItem button>
                <ListItemIcon>
                    <KeyboardArrowUpIcon />
                </ListItemIcon>
                <ListItemText primary="getAPower" />
            </ListItem>
        </Link>
    </div>
);
