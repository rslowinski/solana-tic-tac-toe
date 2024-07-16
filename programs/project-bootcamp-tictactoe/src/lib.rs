use anchor_lang::prelude::*;

declare_id!("5dzgEiT8pHgcxYfVBmu1nt3ZbsQD8YYvBgwFvqMV446L");

#[program]
pub mod project_bootcamp_tictactoe {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
