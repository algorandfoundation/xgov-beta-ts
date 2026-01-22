import {
  op,
  Application,
  Contract,
  uint64,
  bytes,
  Bytes,
  Account,
  Global,
  log,
} from "@algorandfoundation/algorand-typescript";
import {
  abimethod,
  encodeArc4,
} from "@algorandfoundation/algorand-typescript/arc4";

type ShortProposalState = {
  open_timestamp: uint64;
  proposer: Account;
  requested_amount: uint64;
  status: uint64;
  title: string;
};

export class XgovReader extends Contract {
  @abimethod({ readonly: true, onCreate: "allow" })
  getShortProposalState(appIds: Application[]): ShortProposalState {
    for (const appId of appIds) {
      const [openTimestamp, openTimestampExists] = op.AppGlobal.getExUint64(
        appId,
        Bytes`open_timestamp`
      );
      const [proposerBytes, proposerExists] = op.AppGlobal.getExBytes(
        appId,
        Bytes`proposer`
      );
      const [requestedAmount, requestedAmountExists] = op.AppGlobal.getExUint64(
        appId,
        Bytes`requested_amount`
      );
      const [status, statusExists] = op.AppGlobal.getExUint64(
        appId,
        Bytes`status`
      );
      const [titleBytes, titleExists] = op.AppGlobal.getExBytes(
        appId,
        Bytes`title`
      );
      const shortState: ShortProposalState = {
        open_timestamp: openTimestampExists ? openTimestamp : 0,
        proposer: proposerExists ? Account(proposerBytes) : Global.zeroAddress,
        requested_amount: requestedAmountExists ? requestedAmount : 0,
        status: statusExists ? status : 0,
        title: titleExists ? String(titleBytes) : "",
      };
      log(encodeArc4(shortState));
    }
    return {
      open_timestamp: 0,
      proposer: Global.zeroAddress,
      requested_amount: 0,
      status: 0,
      title: "",
    };
  }
}

type FullProposalState = {
  approvals: uint64;
  assigned_votes: uint64;
  committee_id: bytes;
  committee_members: uint64;
  committee_votes: uint64;
  finalized: uint64;
  focus: uint64;
  funding_category: uint64;
  funding_type: uint64;
  locked_amount: uint64;
  metadata_uploaded: uint64;
  nulls: uint64;
  open_timestamp: uint64;
  proposer: bytes;
  registry_app_id: uint64;
  rejections: uint64;
  requested_amount: uint64;
  status: uint64;
  submission_timestamp: uint64;
  title: bytes;
  vote_opening_timestamp: uint64;
  voted_members: uint64;
  voters_count: uint64;
};
