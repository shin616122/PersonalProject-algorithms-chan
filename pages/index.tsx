import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccessAlarm />
                </ListItemIcon>
                <Link href="/">
                  <ListItemText primary="Home" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ThreeDRotation />
                </ListItemIcon>
                <Link href="/bubble-sort">
                  <ListItemText primary="Bubble Sort" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <Link href="/about">
                  <ListItemText primary="About" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  )
}

export default Home
