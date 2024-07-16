import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { ProjectBootcampTictactoe } from "../target/types/project_bootcamp_tictactoe";

describe("project-bootcamp-tictactoe", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.ProjectBootcampTictactoe as Program<ProjectBootcampTictactoe>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
