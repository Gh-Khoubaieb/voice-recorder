import { Injectable } from "@angular/core";

export interface ChildrenItems {
    state: string;
    false?: boolean;
    name: string;
    type?: string;
    children?: ChildrenItems[];
  }
  
  export interface MainMenuItems {
    state: any;
    true:boolean
    num:any
    short_label?: string;
    main_state?: string;
    false?: boolean;
    name: any;
    type: string;
    icon: string;
    children?: ChildrenItems[];
  }
  
  export interface Menu {
    label: string;
    main: MainMenuItems[];
  }

  const MENUITEMS = [
    //*******************Pilotage */
    {
      label: 'PAGES',
      main: [
       
  
        //Dashboard
        {
          state: 'Dashboard',
          true:true,
          false:false,
          num:1,
          short_label: 'Dashboard',
          name: 'Dashboard',
          type: 'sub',
          icon: 'dashboard',
          children: [
            {
              state: 'Default',
              name: 'Default',
            },
            {
              state: 'Analytics',
              name: 'Analytics',
            },
            {
              state: 'SaaS',
              name: 'SaaS',
            }   
          ],
        },
        //Pages
        {
            state: 'Pages',
            true:true,
            false:false,
            num:2,
            short_label: 'Pages',
            name: 'Pages',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [
              {
                state: 'Profile',
                name: 'Profile',
              },
              {
                state: 'Missions',
                name: 'Missions',
              },
              {
                state: 'Téléopérateurs',
                name: ' Téléopérateurs',
              }   
            ],
          },

        //Projects
        {
          state: 'Projects',
          true:true,
          false:false,
          num:3,
          short_label: 'P',
          name: 'Projects',
          type: 'link',
          icon: 'flip_to_back',
        },
        
        //Invoices
        {
            state: 'Parent',
            true:true,
            false:false,
            num:4,
            short_label: 'Parent 1',
            name: 'Parent',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [
              {
                state: 'Child',
                name: 'Child',
              },
              {
                state: 'List',
                name: 'List',
              }   
            ],
          },
          //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
            state: 'Parent',
            true:true,
            false:false,
            num:4,
            short_label: 'Parent 1',
            name: 'Parent',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [
              {
                state: 'Child',
                name: 'Child',
              },
              {
                state: 'List',
                name: 'List',
              }   
            ],
          },
          //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
        //Invoices
        {
          state: 'Parent',
          true:true,
          false:false,
          num:4,
          short_label: 'Parent 1',
          name: 'Parent',
          type: 'sub',
          icon: 'chrome_reader_mode',
          children: [
            {
              state: 'Child',
              name: 'Child',
            },
            {
              state: 'List',
              name: 'List',
            }   
          ],
        },
           //Invoices
           {
            state: 'Parent',
            true:true,
            false:false,
            num:4,
            short_label: 'Parent 1',
            name: 'Parent',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [
              {
                state: 'Child',
                name: 'Child',
              },
              {
                state: 'List',
                name: 'List',
              }   
            ],
          },
          //Invoices
          {
            state: 'Parent',
            true:true,
            false:false,
            num:4,
            short_label: 'Parent 1',
            name: 'Parent',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [
              {
                state: 'Child',
                name: 'Child',
              },
              {
                state: 'List',
                name: 'List',
              }   
            ],
          },
            //Invoices
            {
              state: 'Parent',
              true:true,
              false:false,
              num:4,
              short_label: 'Parent 1',
              name: 'Parent',
              type: 'sub',
              icon: 'chrome_reader_mode',
              children: [
                {
                  state: 'Child',
                  name: 'Child',
                },
                {
                  state: 'List',
                  name: 'List',
                }   
              ],
            },
              //Invoices
          {
            state: 'Parent',
            true:true,
            false:false,
            num:4,
            short_label: 'Parent 1',
            name: 'Parent',
            type: 'sub',
            icon: 'chrome_reader_mode',
            children: [
              {
                state: 'Child',
                name: 'Child',
              },
              {
                state: 'List',
                name: 'List',
              }   
            ],
          },
      ],
    },
  ]  

  @Injectable()
  export class MenuItems {
    getAll(): Menu[] {
      return MENUITEMS;
    }
  }
  