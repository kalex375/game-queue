# game-queue

## Base requirements

1. Implement user authentication
    - login page
    - register page
    - forgot passwords page
    - add 2FA
1. Dashboard page with game queue list. 
As user I can:
    - add game (get game info from API (https://api-docs.igdb.com/#about)
    - delete game
    - add/edit note
    - add/delete tags
    - change status (new, playing, finished)
    - sort game list. Move game up/down. Use DnD(drag and drop) for sorting
    - show only few last finished games on top of list If no sorting is applied
    - Allow filter list by status, tags, user input (filer by title)
1. use any BaaS as backend (https://supabase.com/, https://parseplatform.org/, https://firebase.google.com/ https://backendless.com/)
1. use VDS/VPS for serve static files and make external api call
1. setup ngnix
1. setup ssl (use letsencrypt) 
1. setup domain
1. use docker for setup own supabase/parseplatform instance
1. use CI/CD DevOps
1. Use SPA framework (Vue2 / Vue3 / React)
1. Do NOT use UI kit like vuetify/ bootstab-vue ect.. but you can use any css framework
2. Add unit tests and e2e test
3. By default site should have dark theme
4. Add light theme
5. Admin panel:
    - Add role/permisions 
    - Create default admin
    - Show users list 
    - Delete user
    - change user role/permisions (make admin)
    - Show user's game queue 
